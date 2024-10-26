require("dotenv").config();
const mongoose = require("mongoose");

const mongoDbUrl = process.env.MONGODB_URL;

const connectDB = () => {
  try {
    mongoose.connect(mongoDbUrl);

    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log(`Datebase connected with ${connection.host}`);
    });

    connection.on("error", () => {
      console.error.bind(console, "Connection error:");
    });
  } catch (error) {
    console.error(error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
