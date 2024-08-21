require("dotenv").config();
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const generateRefreshToken = (user) => {
  const selectedInfo = _.pick(user, ["_id", "email"]);

  const refreshToken = jwt.sign(
    { UserInfo: selectedInfo },
    process.env.AUTH_REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.AUTH_REFRESH_TOKEN_EXPIRY }
  );

  return refreshToken;
};

module.exports = generateRefreshToken;
