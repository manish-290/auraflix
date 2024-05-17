import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';
import cors from "cors";

//path config for the port number, it comes from .env file
dotenv.config({
    path:".env"
})

const app = express();

//use middlewares or 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

//apis
app.use("/api/v1/user",userRouter);


//mongodb connection
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((error)=>{
    console.log(`Error connecting to mongodb`);
});


app.listen( process.env.PORT,()=>{
    console.log(`Server is running on port ${ process.env.PORT}`);
});