const getByFields = require("../../services/getByFields");
const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");
const getUsersByFields = async (req, res) => {
  try {
    const { fields, ...queryParams } = req.query;
    const requestedFields = fields?.length > 0 ? fields.split(",") : [];

    const users = await getByFields(
      User,
      queryParams,
      requestedFields.join("")
    );

    if (!users || users.length === 0) {
      return sendResponse.failed(res, "No users found", null, 404);
    }

    return sendResponse.success(
      res,
      "Users retrieved successfully",
      users,
      200
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Error retrieving users", error, 500);
  }
};

module.exports = getUsersByFields;
