require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

app.use(cors({
  origin: "https://ferrytkt.onrender.com/", // Allow local frontend to access the backend
  methods: ["GET", "POST", "PUT", "DELETE"], // Add the methods you want to allow
  credentials: true, // If you need cookies/session
}));
app.use(express.json());

console.log("Starting the server...");

// MongoDB Connection
connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api", ticketRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server running on port 5000"));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Unhandled Error:", err);
  res.status(500).json({ message: "Something went wrong" });
});

