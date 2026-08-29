import mongoose from "mongoose";
import dns from "node:dns";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is missing in backend/.env");
    }

    if (mongoUri.startsWith("mongodb+srv://")) {
      // Some local DNS resolvers reject SRV lookups from Node.
      dns.setServers(["8.8.8.8", "1.1.1.1"]);
    }

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    if (error?.code === "ECONNREFUSED" && error?.syscall === "querySrv") {
      throw new Error(
        "MongoDB SRV DNS lookup failed. Check internet/DNS or use a non-SRV mongodb:// URI in MONGO_URI."
      );
    }

    throw new Error(`DB connection failed: ${error.message}`);
  }
};

export default connectDB;