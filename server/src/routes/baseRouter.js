const express = require("express");
const baseController = require("../controllers/base/baseController");
const router = express.Router();
// start of router

console.log("BASE Router");
router.post("/signup", baseController.signup);

module.exports = router;
