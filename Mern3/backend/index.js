import express from "express";
import dotenv from "dotenv";
// import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import eroute from "./routes/emailroute.js";
import uroute from "./routes/userroute.js";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT || 8070;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Routes
app.use("/api/v1/user", uroute);
app.use("/api/v1/email", eroute);

// Handle undefined routes
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/abc');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
// module.exports = connectDB;

connectDB();


app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
