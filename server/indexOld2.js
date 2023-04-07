import express from 'express'
import cors from "cors"
import fileUpload from 'express-fileupload'
import userRouter from './routes/UserRoute.js';
// import checkLoginUser from './controllers/UserController';

// const express = require("express")
// const cors = require("cors")
// const fileUpload = require("express-fileupload")
// const userRouter = require("./routes/UserRoute")

// const expires = require("express")

// const app = express();

// import User from "../models/UserModel.js";
// import express, { response } from "express";
// import Finddb from "../models/UserModel.js";
// import bcrypt from "bcrypt";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import cors from "cors";
// import userRouter from "../routes/UserRoute.js";


// const saltRounds = 10;
export const app = express() 


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(cors());
app.use(express.json())
app.use(fileUpload())
// app.use(express.static("pubic"))
app.use(userRouter)

app.listen(3002, () =>   console.log("server is runing on port 3002 "))