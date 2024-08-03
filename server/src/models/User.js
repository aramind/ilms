const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dotenv = require("dotenv");
const getRoles = require("../utils/getRoles");
const getStatuses = require("../utils/getStatuses");
dotenv.config();

const validRoles = getRoles.keys;
const validStatuses = getStatuses.keys;

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
  role: {
    type: String,
    required: true,
    enum: { values: validRoles },
  },
  accessLevel: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: { values: validStatuses },
  },
  tokens: {
    refresh: { type: String },
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

module.exports = mongoose("User", UserSchema);
