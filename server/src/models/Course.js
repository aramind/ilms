const mongoose = require("mongoose");

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
  image: {
    type: String,
  },
  topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
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
