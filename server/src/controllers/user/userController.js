const enrollCourse = require("./enrollCourse");
const getEnrolledCourses = require("./getEnrolledCourses");
const register = require("./register");
const updateCourseProgress = require("./updateCourseProgress");

const userController = {
  register,
  enrollCourse,
  getEnrolledCourses,
  updateCourseProgress,
};

module.exports = userController;
