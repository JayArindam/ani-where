import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  
  if (!mongoUri) {
    console.error("MongoDB URI is not defined in the environment variables.");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error: ", error);
  }
};
