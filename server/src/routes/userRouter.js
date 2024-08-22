const express = require("express");
const userController = require("../controllers/user/userController");
const router = express.Router();
// start of router

console.log("User Router");
router.patch(
  "/:userId/enrolledCourses/:courseId/enroll",
  userController.enrollCourse
);

module.exports = router;
