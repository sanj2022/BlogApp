import express from "express";
import postRoutes from"./routes/posts.js";
import userRoutes from"./routes/users.js";
import authRoutes from"./routes/auth.js";
import cors from 'cors';
import cookieParser from "cookie-parser"
import multer from "multer";

const app = express()

app.use(cookieParser())
//app.use(cors()) // Use this after the variable declaration
//app.use(cors({ origin: 'http://127.0.0.1:3000', credentials: true, exposedHeaders: ['Set-Cookie', 'Date', 'ETag'] }))

// Set up CORS middleware
app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true,
   exposedHeaders: ['Set-Cookie', 'Date', 'ETag']
 }));

app.use(express.json())

app.use(function(req, res, next) {
   res.header('Content-Type', 'application/json;charset=UTF-8')
   res.header('Access-Control-Allow-Credentials', true)
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   )
   next()
 })

 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, "../client/public/upload");
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + file.originalname);
   },
 });
 
 const upload = multer({ storage });
 
 app.post("/api/upload", upload.single("file"), function (req, res) {
   const file = req.file;
   res.status(200).json(file.filename);
 });

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800,()=>{
   console.log("It is connected")
})
