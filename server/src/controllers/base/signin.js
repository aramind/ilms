const User = require("../../models/User");
const _ = require("lodash");
const sendResponse = require("../../utils/sendResponse");
const comparePassword = require("../../utils/comparePassword");
const generateAccessToken = require("../../utils/generateAccessToken");
const generateRefreshToken = require("../../utils/generateRefreshToken");
const getRoles = require("../../utils/getRoles");

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const lowercaseEmail = email.toLowerCase();

    const user = await User.findOne({ email: lowercaseEmail });

    if (!user) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }

    // remove the second condition in or if implemented na ang can forget password
    const isPasswordCorrect =
      (await comparePassword(password, user.password)) ||
      password === user.password;

    if (!isPasswordCorrect) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }

    const message =
      user?.status === "pending"
        ? "Your status is still pending. Wait for approval."
        : `User status is ${user?.status}`;

    if (user?.status !== "active") {
      return sendResponse.failed(res, message, null, 403);
    }
    // create and attach jwts

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;

    const updatedUser = await user.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    const returnedUserInfo = _.pick(user, [
      "firstName",
      "lastName",
      "_id",
      // "enrolledCourses",
    ]);

    const userInfo = _.pick(user, [
      "firstName",
      "lastName",
      "email",
      "enrolledCourses",
      "role",
      "status",
    ]);

    return sendResponse.success(
      res,
      "Log in successful",
      {
        ...returnedUserInfo,
        userInfo: userInfo,
        token: accessToken,
        role: getRoles.list[user.role],
      },
      200
    );
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Error signing in", error, 500);
  }
};

module.exports = signin;
