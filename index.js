import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";
import { connectDb } from "./config/db.js";
dotenv.config();


const app = express();

connectDb();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRouter)
const port = process.env.PORT||5000;



app.listen(port, ()=> {
  console.log(`server is active on port ${port}`);
})

