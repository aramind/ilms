const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const returnNoEnrolledCourses = (res) => {
  return sendResponse.failed(res, "No enrolled courses on records", null, 404);
};
const getEnrolledCourses = async (req, res) => {
  try {
    const credentials = req.credentials;

    console.log(credentials);
    const allEnrolledCourses = await User.findById(credentials?._id)
      .populate({
        path: "enrolledCourses.course",
      })
      .select("enrolledCourses -_id")
      .lean();

    console.log(allEnrolledCourses.enrolledCourses);

    if (!allEnrolledCourses) {
      returnNoEnrolledCourses(res);
    }

    return sendResponse.success(
      res,
      "Enrolled courses successfully retrieved",
      allEnrolledCourses,
      200
    );
  } catch (error) {
    return sendResponse.failed(res, "Network error", error, 500);
  }
};

module.exports = getEnrolledCourses;
