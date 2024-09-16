const User = require("../../models/User");
const update = require("../../services/update");
const sendResponse = require("../../utils/sendResponse");

const patchUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = req.body;

    const updatedUser = await update(User, _id, data);

    if (!updatedUser) {
      return sendResponse.failed(res, "Failed updating user", null, 404);
    }

    return sendResponse.success(
      res,
      "Successfully updated user info.",
      updatedUser,
      200
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Error updating user", error, 500);
  }
};

module.exports = patchUser;
