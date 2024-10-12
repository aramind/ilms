const User = require("../../models/User");
const getByFields = require("../../services/getByFields");
const sendResponse = require("../../utils/sendResponse");

const getStudentsOfACourse = async (req, res) => {
  console.log("IN GETSTUDENTS OF A COURSE CONTROLLER");
  try {
    const { courseId } = req.params;
    const { fields } = req.query;
    const requestedFields = fields?.length > 0 ? fields.split(",") : [];

    const students = await getByFields(
      User,
      {
        "enrolledCourses.course": courseId,
      },
      requestedFields.join(" ")
    );

    if (!students || students.length < 1) {
      return sendResponse.failed(
        res,
        "No students enrolled in the course",
        null,
        404
      );
    }

    return sendResponse.success(
      res,
      "Students retrieved successfully",
      students,
      200
    );
  } catch (error) {
    console.log(error);
    return sendResponse.failed(res, "Error retrieving students", error, 500);
  }
};

module.exports = getStudentsOfACourse;
