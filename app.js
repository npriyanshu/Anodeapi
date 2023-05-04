// we will use all middlewares in this file   

import express from "express";
import userRouter from "./routes/user.js"; // <-- router middleware
import {config} from 'dotenv'
export const app = express(); 

config({
    path:"./data/config.env"   // <-- path of the env file
});

// middlewares
app.use(express.json())
app.use("/users",userRouter)  // <-- we can also add prefix aur custom route