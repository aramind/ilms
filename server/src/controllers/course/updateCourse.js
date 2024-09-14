const sendResponse = require("../../utils/sendResponse");
const Course = require("../../models/Course");
const update = require("../../services/update");

const updateCourse = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = req.body;

    const updatedCourse = await update(Course, _id, data);

    if (!updateCourse) {
      return sendResponse.failed(res, "Update failed", null, 404);
    }

    return sendResponse.success(res, "Update Successful", updatedCourse, 200);
  } catch (error) {
    return sendResponse.failed(res, "Error updating", error, 500);
  }
};

module.exports = updateCourse;
