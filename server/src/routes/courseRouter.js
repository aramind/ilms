const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course/courseController");
const verifyRole = require("../middlewares/auth/verifyRole");

console.log("COURSE ROUTER");
router.use(verifyRole(["super", "admin", "student"]));

router.post("", courseController.addCourse);
router.get("/trimmed", courseController.getCourseByFields);

module.exports = router;
