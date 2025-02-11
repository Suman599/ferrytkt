const cron = require("node-cron");
const fetch = require("node-fetch");

const BACKEND_URL = "https://ferrytkt.onrender.com/api/health"; // Use an existing API route

// Run every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  try {
    console.log("⏳ Pinging backend to keep it awake...");
    const response = await fetch(BACKEND_URL);
    if (response.ok) {
      console.log("✅ Backend is active!");
    } else {
      console.log("⚠️ Backend responded with status:", response.status);
    }
  } catch (error) {
    console.error("❌ Error pinging backend:", error.message);
  }
});

console.log("🚀 Cron job started! Backend will be pinged every 10 minutes.");
