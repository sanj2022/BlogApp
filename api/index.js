import express from "express";
import postRoutes from"./routes/posts.js";
import userRoutes from"./routes/users.js";
import authRoutes from"./routes/auth.js";
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = express()

app.use(cors()) // Use this after the variable declaration

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800,()=>{
   console.log("It is connected")
})
