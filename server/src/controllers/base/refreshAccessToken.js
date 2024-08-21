const User = require("../../models/User");
const generateAccessToken = require("../../utils/generateAccessToken");
const getRoles = require("../../utils/getRoles");
const sendResponse = require("../../utils/sendResponse");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const refreshAccessToken = async (req, res) => {
  console.log("IN REFRESH ACC TOKEN CONTROLLER");

  try {
    const refreshToken = req.cookies?.jwt;

    console.log("REFRESH TOKEN", refreshAccessToken);

    if (!refreshToken) {
      return sendResponse.failed(res, "Unauthorized", null, 401);
    }

    const user = await User.findOne({
      refreshToken,
    });

    if (!user) {
      return sendResponse.failed(res, "Unknown user", null, 404);
    }

    const returnedUserInfo = _.pick(user, ["firstName", "lastName", "_id"]);

    console.log(returnedUserInfo);
    jwt.verify(
      refreshToken,
      process.env.AUTH_REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          throw err;
        } else {
          if (user?._id?.toString() !== decoded.UserInfo._id) {
            return sendResponse.failed(res, "Unauthorized", null, 400);
          }
          return sendResponse.success(
            res,
            "Token refreshed",
            {
              ...returnedUserInfo,
              token: generateAccessToken(user),
              role: getRoles.list[user.role],
            },
            200
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Error in refreshing credentials", 500);
  }
};

module.exports = refreshAccessToken;
