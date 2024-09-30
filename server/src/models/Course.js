const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const constants = require("../config/constants");

const TopicTaskSchema = new Schema({
  action: {
    type: String,
    required: true,
    enum: { values: constants?.ACTIONS },
    default: constants?.ACTIONS?.[0],
  },
  instruction: {
    type: String,
  },
  link: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: constants?.TASKS_STATUSES[0],
    enum: { values: constants?.TASKS_STATUSES },
  },
});

const TopicSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: constants?.TOPICS_STATUSES[0],
    enum: { values: constants?.TOPICS_STATUSES },
  },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  files: [
    { text: { type: String }, link: { type: String }, type: { type: String } },
  ],
  topicTasks: [TopicTaskSchema], // Embedding TopicTaskSchema directly
});

const CourseSchema = new Schema({
  code: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  acronym: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  access: {
    type: Number,
    required: true,
    default: 1,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: constants?.COURSE_STATUSES[0],
    enum: { values: constants?.COURSE_STATUSES },
  },
  image: {
    type: String,
  },
  // topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
  topics: [TopicSchema],
  version: {
    type: String,
    required: true,
    default: constants?.DEFAULT_VALUES?.version,
    enum: { values: constants?.VERSIONS },
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

CourseSchema.set("timestamps", true);

module.exports = mongoose.model("Course", CourseSchema);
