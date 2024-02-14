// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${sagar}`);
    app.on("error", () => {
      console.log("ERRR:", "error");
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port, $ {process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();
*/
