require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ProductRoute = require("./routes/productRoute");

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(
  cors({
    origin: [
      "http://35.154.119.124:3000", // frontend public IP
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- DB CONNECTION ---------- */
console.log("MONGO_URI:", process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

/* ---------- ROUTES ---------- */
app.use("/api", ProductRoute);

app.get("/", (req, res) => {
  res.send("🚀 E-Commerce API is running");
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
