require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

console.log("MONGO_URI:", process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
