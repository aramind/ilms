const addCourse = require("./addCourse");
const getCourseByFields = require("./getCourseByFields");
const updateCourse = require("./updateCourse");

const courseController = {
  addCourse,
  getCourseByFields,
  updateCourse,
};

module.exports = courseController;
