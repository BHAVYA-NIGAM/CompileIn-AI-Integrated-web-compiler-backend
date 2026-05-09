import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import axios from "axios";

const app = express();

connectDB();

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/find", authRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);


const URL = 'https://compilein-ai-integrated-web-compiler.onrender.com';

setInterval(async () => {
  try {
    const response = await axios.get(URL);
    console.log('Pinged successfully:', response.status);
  } catch (err) {
    console.log('Ping failed');
  }
}, 30000);
