// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {

//     if (mongoose.connection.readyState === 0) {
//       console.log("Connecting to MongoDB...");
//       await mongoose.connect(process.env.MONGODB_URI as string);
//       console.log("MongoDB connected successfully!");
//     } else {
//       console.log("MongoDB is already connected.");
//     }
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//     throw new Error("MongoDB connection failed");
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    if (mongoose.connection.readyState === 0) {
      console.log("Connecting to MongoDB...");
      await mongoose.connect(process.env.MONGODB_URI as string); // No need for useNewUrlParser or useUnifiedTopology
      isConnected = true;
      console.log("MongoDB connected successfully!");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
