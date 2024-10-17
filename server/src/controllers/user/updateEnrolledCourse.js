const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const updateEnrolledCourse = async (req, res) => {
  try {
    const { userId, courseId, field } = req.params;
    const { data } = req.body;

    if (!userId || !courseId || !field) {
      return sendResponse.failed(res, "Incomplete information", null, 400);
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId, "enrolledCourses.course": courseId },
      { $set: { [`enrolledCourses.$.${field}`]: data } },
      { new: true }
    );

    if (!updatedUser) {
      return sendResponse.failed(res, "User or course not found", null, 404);
    }

    return sendResponse.success(res, "Update successful", updatedUser, 200);
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Error updating user", error, 500);
  }
};

module.exports = updateEnrolledCourse;
