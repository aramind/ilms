const User = require("../../models/User");
const _ = require("lodash");
const sendResponse = require("../../utils/sendResponse");
const comparePassword = require("../../utils/comparePassword");

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const lowercaseEmail = email.toLowerCase();

    const user = await User.findOne({ email: lowercaseEmail });

    if (!user) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }
    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }

    return sendResponse.success(
      res,
      "Log in successful",
      _.pick(user.toObject(), [
        "_id",
        "email",
        "firstName",
        "lastName",
        "role",
        "accessLevel",
        "status",
        "enrolledCourses",
      ]),
      200
    );
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Request Error", error, 500);
  }
};

module.exports = signin;
