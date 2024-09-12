import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To Database Successfully...");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectToMongo;
