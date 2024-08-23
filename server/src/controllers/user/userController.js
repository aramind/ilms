const enrollCourse = require("./enrollCourse");
const getEnrolledCourses = require("./getEnrolledCourses");
const register = require("./register");

const userController = {
  register,
  enrollCourse,
  getEnrolledCourses,
};

module.exports = userController;
