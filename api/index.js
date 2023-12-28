import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { loginUser, registerUser } from "./controllers/user.controller.js";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser())

connectDB();

app.post("/register", registerUser);
app.post("/login", loginUser);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
