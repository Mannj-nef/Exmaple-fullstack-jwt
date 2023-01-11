import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);

const mongoURL = `mongodb://${process.env.DB_HOT}/${process.env.DB_PORT}`;

function connectDb() {
  try {
    mongoose.connect(mongoURL);
    console.log("connect database successfully !!");
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;
