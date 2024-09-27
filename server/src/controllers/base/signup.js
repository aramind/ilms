const User = require("../../models/User");
const hashPassword = require("../../utils/hashPassword");
const sendResponse = require("../../utils/sendResponse");

const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return sendResponse.failed(res, "Email already taken!");
    }

    const newUser = new User({
      email,
      // password: await hashPassword(password),
      password,
      firstName,
      lastName,
    });

    const createdUser = await newUser.save();

    sendResponse.success(
      res,
      `Hello ${firstName}, ${lastName}! Thank you for signing up. \nYou will be notified via email for the result of your approval.`,
      createdUser,
      201
    );
    return createdUser;
  } catch (error) {
    console.error(error);
    sendResponse.failed(res, "Server Error", error, 500);
  }
};

module.exports = signup;
