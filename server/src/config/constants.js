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
  ENROLLED_COURSE_STATUSES: JSON.parse(process.env.ENROLLED_COURSE_STATUSES),
  TOPICS_STATUSES: JSON.parse(process.env.TOPICS_STATUSES),
  TASKS_STATUSES: JSON.parse(process.env.TASKS_STATUSES),
  COURSE_STATUSES: JSON.parse(process.env.COURSE_STATUSES),
};

module.exports = constants;
