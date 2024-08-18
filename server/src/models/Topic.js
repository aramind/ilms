const mongoose = require("mongoose");
const constants = require("../config/constants");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  topicTasks: [{ type: Schema.Types.ObjectId, ref: "TopicTask" }],
  files: [
    { text: { type: String }, link: { type: String }, type: { type: String } },
  ],
});

module.exports = mongoose.model("Topic", TopicSchema);
