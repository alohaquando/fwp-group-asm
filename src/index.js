import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import apiRouter from "./routes/routes.js";

// Database connection
dotenv.config();

const mongoDBConnectionString = process.env.DATABASE_URL;

mongoose.connect(mongoDBConnectionString);

mongoose.connection.on("error", (error) => {
  console.log(error);
});

mongoose.connection.once("connected", () => {
  console.log("Database connection successfully");
});

// App and app.listen
const server = express();
server.use(cors());
server.use("/api", apiRouter);

server.listen(3000, () => {
  console.log(`Server started at ${3000}`);
});
