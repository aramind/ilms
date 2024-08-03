const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dotenv = require("dotenv");
const getRoles = require("../utils/getRoles");
dotenv.config();

const validRoles = getRoles.keys;

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
});

module.exports = mongoose("User", UserSchema);
