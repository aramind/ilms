const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course/courseController");
const verifyRole = require("../middlewares/auth/verifyRole");
const verifyJWT = require("../middlewares/auth/verifyJWT");

console.log("IN COURSE ROUTER");
router.use(verifyJWT);
router.use(verifyRole(["super", "admin", "student"]));

router.post("", courseController.addCourse);
router.get("/trimmed", courseController.getCourseByFields);
router.patch("/:_id", courseController.updateCourse);

module.exports = router;
