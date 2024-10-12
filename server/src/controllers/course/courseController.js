const addCourse = require("./addCourse");
const getCourseByFields = require("./getCourseByFields");
const getStudentsOfACourse = require("./getStudentsOfACourse");
const updateCourse = require("./updateCourse");

const courseController = {
  addCourse,
  getCourseByFields,
  updateCourse,
  getStudentsOfACourse,
};

module.exports = courseController;
