const sendResponse = require("../../utils/sendResponse");

const getCourseByFields = async (req, res) => {
  try {
    const requestedFields = req.query.fields ? req.query.fields.split(",") : [];

    const courses = await Course.find({}, requestedFields.join(" "));

    if (!courses) {
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
