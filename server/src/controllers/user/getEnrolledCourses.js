const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const getEnrolledCourses = async (req, res) => {
  try {
    const credentials = req.credentials;

    const enrolledCourses = await User.findById(credentials?._id)
      .populate({
        path: "enrolledCourses.course",
        match: { "enrolledCourses.status": "active" }, // Filters for active status
      })
      .select("enrolledCourses -_id");

    if (!enrolledCourses) {
      return sendResponse.failed(
        res,
        "No enrolled courses on records",
        null,
        404
      );
    }

    return sendResponse.success(
      res,
      "Enrolled courses successfully retrieved",
      enrolledCourses,
      200
    );
  } catch (error) {
    return sendResponse.failed(res, "Network error", error, 500);
  }
};

module.exports = getEnrolledCourses;
