const DevMessage = require("../../models/DevMessage");
const sendResponse = require("../../utils/sendResponse");

const addMessage = async (req, res) => {
  try {
    const { name, company, email, subject, message } = req.body;

    const existing = await DevMessage.findOne({
      name,
      company,
      email,
      subject,
      message,
    });

    if (existing) {
      return sendResponse.failed(
        res,
        "You already sent this message!",
        null,
        409
      );
    }

    const newMessage = await DevMessage.create({
      name,
      company,
      email,
      subject,
      message,
    });

    return sendResponse.success(
      res,
      "Message sent successfully",
      newMessage,
      201
    );
  } catch (error) {
    console.error("Error adding message:", error);
    return sendResponse.failed(
      res,
      "Server error. Please try again later.",
      null,
      500
    );
  }
};

module.exports = addMessage;
