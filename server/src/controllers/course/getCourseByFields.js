const Course = require("../../models/Course");
const sendResponse = require("../../utils/sendResponse");

const getCourseByFields = async (req, res) => {
  console.log("in controller of getcoursesbyfields");
  try {
    const { fields, ...queryParams } = req.query;
    const requestedFields = fields?.length > 0 ? fields.split(",") : "";

    const credentials = req.credentials;

    console.log(queryParams);

    const courses = await Course.find(queryParams, requestedFields.join(" "));

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
