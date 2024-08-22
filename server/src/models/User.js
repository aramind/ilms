const mongoose = require("mongoose");
const constants = require("../config/constants");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  profilePicture: { type: String },
  enrolledCourses: [
    {
      courseId: { type: Schema.Types.ObjectId, ref: "Course" },
      status: {
        type: String,
        required: true,
        default: constants?.ENROLLED_COURSE_STATUSES?.[0],
        enum: { values: constants?.ENROLLED_COURSE_STATUSES },
      },
      progress: [
        {
          topicId: { type: Schema.Types.ObjectId, ref: "Topic" },
          completedTopics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
          completedTopicTasks: [
            { type: Schema.Types.ObjectId, ref: "TopicTask" },
          ],
        },
      ],
    },
  ],
  role: {
    type: String,
    required: true,
    enum: { values: constants?.ROLES },
    default: constants?.DEFAULT_VALUES?.role,
  },
  accessLevel: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    required: true,
    enum: { values: constants?.STATUSES },
    default: constants?.DEFAULT_VALUES?.status,
  },
  tokens: [{ name: { type: String }, value: { type: String } }],
  refreshToken: { type: String, default: "" },
  version: {
    type: String,
    required: true,
    default: constants?.DEFAULT_VALUES?.version,
    enum: { values: constants?.VERSIONS },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  this._update.updatedAt = new Date();
});

module.exports = mongoose.model("User", UserSchema);
