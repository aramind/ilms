const refreshAccessToken = require("./refreshAccessToken");
const signin = require("./signin");
const signup = require("./signup");

const baseController = {
  signup,
  signin,
  refreshAccessToken,
};

module.exports = baseController;
