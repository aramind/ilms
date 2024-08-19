const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course/courseController");

console.log("COURSE ROUTER");

router.post("", courseController.addCourse);

module.exports = router;
