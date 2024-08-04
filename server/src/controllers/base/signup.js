const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      sendResponse.failed(res, "User already existed!");
    }

    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      role: "student",
      accessLevel: 1,
    });
  } catch (error) {}
};
