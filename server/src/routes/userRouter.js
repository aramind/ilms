const express = require("express");
const userController = require("../controllers/user/userController");
const verifyJWT = require("../middlewares/auth/verifyJWT");

const router = express.Router();
// start of router

router.use(verifyJWT);
console.log("User Router");

router.patch(
  "/:userId/enrolledCourses/:courseId/enroll",
  userController.enrollCourse
);
router.patch("/updateEnrolledCourses", userController.updateCourseProgress);
router.get("/enrolledCourses", userController.getEnrolledCourses);

module.exports = router;
