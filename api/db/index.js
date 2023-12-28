import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://soumo:soumo123@cluster0.h7zn2o4.mongodb.net/mern-blog"
    );
    console.log(
      `\nMongoDB connected successfully !! DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED.", error);
    process.exit(1);
  }
};

export default connectDB;
