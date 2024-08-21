require("dotenv").config();
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const getRoles = require("./getRoles");

const generateAccessToken = (user) => {
  const selectedInfo = _.pick(user, [
    "_id",
    "firstName",
    "profilePicture",
    "role",
    "accessLevel",
    "status",
  ]);

  const userInfo = {
    ...selectedInfo,
    role: getRoles.list[selectedInfo.role],
  };
  const accessToken = jwt.sign(
    { UserInfo: userInfo },
    process.env.AUTH_ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY }
  );

  return accessToken;
};

module.exports = generateAccessToken;
