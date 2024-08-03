import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection successfull");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(0);
  }
};

export { connectdb };
