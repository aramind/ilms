const { default: mongoose } = require("mongoose");
const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const enrollCourse = async (req, res) => {
  console.log("IN ENROLLED COURSES CONTROLLER");
  try {
    const { courseId } = req.params;

    // Convert courseId to a MongoDB ObjectId
    const courseObjectId = courseId;
    const _id = req?.credentials?._id;

    const user = await User.findOneAndUpdate(
      {
        _id,
        "enrolledCourses.courseId": { $ne: courseObjectId },
      },
      { $push: { enrolledCourses: { courseId: courseObjectId } } },
      { new: true }
    );

    if (!user) {
      return sendResponse.failed(res, "Unknown user", null, 404);
    }

    return sendResponse.success(
      res,
      "Course enrollment submitted",
      user.enrolledCourses || [],
      200
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Server error", null, 500);
  }
};

module.exports = enrollCourse;
