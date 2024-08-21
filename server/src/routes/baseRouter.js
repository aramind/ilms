const express = require("express");
const baseController = require("../controllers/base/baseController");
const router = express.Router();
// start of router

console.log("BASE Router");
router.get("/refresh", baseController.refreshAccessToken);
router.post("/signup", baseController.signup);
router.post("/signin", baseController.signin);

module.exports = router;
