import mongoose from "mongoose";

let isConnected = false; 

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    if (mongoose.connection.readyState === 0) {
      console.log("Connecting to MongoDB...");
      await mongoose.connect(process.env.MONGODB_URI as string, {
        serverSelectionTimeoutMS: 5000, // Set timeout to 5 seconds
      });
      isConnected = true;
      console.log("MongoDB connected successfully!");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
