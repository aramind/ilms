const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();

// env

dotenv.config();
// const PORT = process.env.PORT || 500;
const PORT = process.env.PORT || 3001;
const DB = process.env.MONGO_CONNECT;

const startServer = async () => {
  try {
    await mongoose.connect(DB);
    app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
