const getRoles = require("../../utils/getRoles");
const sendResponse = require("../../utils/sendResponse");

const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    role = req?.credentials?.role;
    if (!role) {
      return sendResponse.failed(res, "Unauthorized", null, 401);
    }

    const roleName = getKeyValue(getRoles.list, role);
    console.log(roleName);

    if (!allowedRoles.includes(roleName)) {
      return sendResponse.failed(res, "Unauthorized, null, 403");
    }

    console.log("passed verify role");
    next();
  };
};

module.exports = verifyRole;
