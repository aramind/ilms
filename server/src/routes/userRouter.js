const express = require("express");
const userController = require("../controllers/user/userController");
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRole = require("../middlewares/auth/verifyRole");

const router = express.Router();
// start of router

router.use(verifyJWT);
console.log("User Router");

router.patch("/:userId/enrolledCourses/:courseId/update/:field");
router.patch(
  "/:userId/enrolledCourses/:courseId/enroll",
  userController.enrollCourse
);
router.patch("/updateTopicTasks", userController.updateCourseProgress);
router.get("/enrolledCourses", userController.getEnrolledCourses);

router.use(verifyRole(["super", "admin"]));
router.get("/", userController.getUsersByFields);
router.patch("/:_id", userController.patchUser);

module.exports = router;
