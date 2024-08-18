const mongoose = require("mongoose");
const constants = require("../config/constants");
const Schema = mongoose.Schema;

const TopicTaskSchema = new Schema({
  action: {
    type: String,
    required: true,
    enum: { values: constants?.ACTIONS },
    default: constants?.ACTIONS?.[0],
  },
  instruction: {
    type: String,
    required: true,
  },
  link: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, required: true },
  },
});

module.exports = mongoose.model("TopicTask", TopicTaskSchema);
