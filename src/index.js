// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port, $ {process.env.PORT}`);
    });
  })
  .catch((err) => console.log("mongodb connection failed !!!", err));

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
