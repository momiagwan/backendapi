import Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {router} from "../back/routes/users.js";

const app = Express();
app.use("/api", router);
dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connect to DB");
    })
    .catch((error) => {
      throw error;
    });
};
app.listen(8800, () => {
  connect();
  console.log("Server start");
});
