const mongoose = require("mongoose");

const connectDB = () => {
  const MONGO_URI = process.env.MONGO_URI || 5000;
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
};

module.exports = { connectDB };
