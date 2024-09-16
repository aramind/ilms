const enrollCourse = require("./enrollCourse");
const getEnrolledCourses = require("./getEnrolledCourses");
const getUsersByFields = require("./getUsersByFields");
const patchUser = require("./patchUser");

const updateCourseProgress = require("./updateCourseProgress");

const userController = {
  enrollCourse,
  getEnrolledCourses,
  updateCourseProgress,
  getUsersByFields,
  patchUser,
};

module.exports = userController;
