const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const returnNoEnrolledCourses = (res) => {
  return sendResponse.failed(res, "No enrolled courses on records", null, 404);
};
const getEnrolledCourses = async (req, res) => {
  console.log("IN getenrolledcoursescontroller");
  try {
    const credentials = req.credentials;

    console.log(credentials);
    const allEnrolledCourses = await User.findById(credentials?._id)
      .populate({
        path: "enrolledCourses.course",
      })
      .select("enrolledCourses -_id");

    console.log(allEnrolledCourses);

    if (!allEnrolledCourses) {
      returnNoEnrolledCourses(res);
    }

    // const activeEnrolledCourses = allEnrolledCourses.filter(
    //   (course) => course.status === "active"
    // );

    // if (!activeEnrolledCourses) {
    //   returnNoEnrolledCourses(res);
    // }

    // const populatedActiveEnrolledCourses = await User.populate(
    //   activeEnrolledCourses,
    //   {
    //     path: "course",
    //   }
    // );

    // if (!populatedActiveEnrolledCourses) {
    //   returnNoEnrolledCourses(res);
    // }
    // const enrolledCourses = await User.findById(credentials?._id)
    //   .populate({
    //     path: "enrolledCourses.course",
    //     match: { "enrolledCourses.status": "active" }, // Filters for active status
    //   })
    //   .select("enrolledCourses -_id");

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
