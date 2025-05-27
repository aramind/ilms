const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DevMessageSchema = new Schema({
  name: String,
  company: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  version: { Type: String, default: "v0" },
});

module.exports = mongoose.model("DevMessage", DevMessageSchema);
