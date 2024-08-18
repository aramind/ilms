const dotenv = require("dotenv");
const getRoles = require("../utils/getRoles");
const getStatuses = require("../utils/getStatuses");
dotenv.config();

const constants = {
  VERSIONS: JSON.parse(process.env.VERSIONS),
  ROLES: getRoles.keys,
  STATUSES: getStatuses.keys,
  ACTIONS: JSON.parse(process.env.ACTIONS),
  DEFAULT_VALUES: JSON.parse(process.env.DEFAULT_VALUES),
};

module.exports = constants;
