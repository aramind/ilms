const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");
const comparePassword = require("../../utils/comparePassword");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const lowercaseEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: lowercaseEmail });

    if (!existingUser) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }
    const isPasswordCorrect = await comparePassword(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return sendResponse.failed(res, "Invalid Credentials!", null, 404);
    }

    return sendResponse.success(res, "Log in successful", existingUser, 200);
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Request Error", error, 500);
  }
};

module.exports = login;
