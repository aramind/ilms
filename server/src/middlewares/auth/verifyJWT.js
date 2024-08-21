const jwt = require("jsonwebtoken");
require("dotenv").config();
const sendResponse = require("../../utils/sendResponse");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer")) {
    return sendResponse.failed(
      res,
      "Unknown Authorization (Note Bearer)",
      null,
      401
    );
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.AUTH_ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.message === "jwt expired") {
          console.log("Refreshing...");
        }
        return sendResponse.failed(
          res,
          "Unauthorize access, {hindi naman expire",
          err,
          403
        );
      }
      req.credentials = decoded.UserInfo;
      next();
    });
  }
};

module.exports = verifyJWT;
