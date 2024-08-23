const Course = require("../../models/Course");
const sendResponse = require("../../utils/sendResponse");

const getCourseByFields = async (req, res) => {
  // console.log("in controller of getcoursesbyfields");
  try {
    const requestedFields = req.query.fields ? req.query.fields.split(",") : [];

    const credentials = req.credentials;
    // console.log("CREDENTIALS", credentials);

    const courses = await Course.find({}, requestedFields.join(" "));

    if (!courses || courses.length === 0) {
      return sendResponse.failed(res, "No courses found", null, 404);
    }

    return sendResponse.success(
      res,
      "Courses successfully retrieved",
      courses,
      200
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Error retrieving course", error, 500);
  }
};

module.exports = getCourseByFields;
