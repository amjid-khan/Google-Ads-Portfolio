import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import { POST as auditPOST } from "./app/api/audit/route.js";
import { POST as contactPOST } from "./app/api/contact/route.js";

dotenv.config({ override: true });

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB().catch((err) => {
  console.error("⚠️  Failed to connect to database:", err.message);
  console.log("✅ Server will still run without database connection");
});

// Routes
app.post("/api/audit", async (req, res) => {
  try {
    const result = await auditPOST({
      json: async () => req.body,
    });
    const data = await result.json();
    res.status(result.status || 200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const result = await contactPOST({
      json: async () => req.body,
    });
    const data = await result.json();
    res.status(result.status || 200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running!" });
});

// Start Server (try next ports when current one is busy)
const startServer = (portToTry) => {
  const server = app.listen(portToTry, () => {
    console.log(`Backend server running on http://localhost:${portToTry}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const fallbackPort = portToTry + 1;
      console.warn(
        `Port ${portToTry} is in use. Retrying on port ${fallbackPort}...`
      );
      startServer(fallbackPort);
      return;
    }

    console.error(`Failed to start backend server: ${error.message}`);
    process.exit(1);
  });
};

startServer(DEFAULT_PORT);
