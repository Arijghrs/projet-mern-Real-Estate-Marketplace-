import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

dotenv.config();





const app = express();

const connect = async () => {
    try {
     await mongoose.connect(process.env.MONGO);
     console.log("connected to mongo")
    } catch (error) {
     throw error;
    }}
    mongoose.connection.on("disconnected", ()=>{
      console.log("mongoDB disconnected")
    })
    mongoose.connection.on("connected", ()=>{
      console.log("mongoDB connected")
    })

    app.use(express.json());
    app.use("/api/user", userRouter);
    app.use("/api/auth", authRouter);
    //middleware
    app.use((err, req, res, next) => {
       const statusCode = err.statusCode || 500;
       const message = err.message || 'internal server error';
       return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
       });
    })


app.listen(3000, () =>{
    connect();  
    console.log('server is running on port 3000');
})