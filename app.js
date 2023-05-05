// we will use all middlewares in this file   

import express from "express";
import userRouter from "./routes/user.js"; // <-- router middleware
import {config} from 'dotenv'
import cookieParser from "cookie-parser";
export const app = express(); 

config({
    path:"./data/config.env"   // <-- path of the env file
});

// middlewares
app.use(express.json()) // <=-- must use before routes
app.use(cookieParser());

//using routes
app.use("/api/v1/users",userRouter)  // <-- we can also add prefix aur custom route