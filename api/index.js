import express from 'express';
import mongoose from 'mongoose';




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


app.listen(3000, () =>{
    console.log('server is running on port 3000');
})