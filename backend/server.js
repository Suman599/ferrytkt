require("dotenv").config();
require("./keepAlive");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// Allowed Origins (Local + Deployed)


// Allow requests from localhost:3000 and your deployed frontend
const allowedOrigins = [
    "http://localhost:3000",
    "https://ferrytkt-1.onrender.com", // Your deployed frontend
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));


// Preflight request handling (Important for CORS)
app.options("*", cors());

// Middleware
app.use(express.json());

console.log("🚀 Starting the server...");

// MongoDB Connection
connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api", ticketRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Unhandled Error:", err.message);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});
app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Backend is active!" });
  });
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port 5000`));
