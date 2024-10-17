const enrollCourse = require("./enrollCourse");
const getEnrolledCourses = require("./getEnrolledCourses");
const getUsersByFields = require("./getUsersByFields");
const patchUser = require("./patchUser");

const updateCourseProgress = require("./updateCourseProgress");
const updateEnrolledCourse = require("./updateEnrolledCourse");

const userController = {
  enrollCourse,
  getEnrolledCourses,
  updateCourseProgress,
  getUsersByFields,
  patchUser,
  updateEnrolledCourse,
};

module.exports = userController;
