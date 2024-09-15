const enrollCourse = require("./enrollCourse");
const getEnrolledCourses = require("./getEnrolledCourses");
const getUsersByFields = require("./getUsersByFields");

const updateCourseProgress = require("./updateCourseProgress");

const userController = {
  enrollCourse,
  getEnrolledCourses,
  updateCourseProgress,
  getUsersByFields,
};

module.exports = userController;
