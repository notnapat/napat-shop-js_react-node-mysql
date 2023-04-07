import express from "express";
// const express = require("express")

import {
    // createUser,
    // checkSessionUser,
    checkLoginUser
} from "../controllers/UserController.js"

// const app = express()
const userRouter = express.Router();
// app == userRouter
// userRouter.get('/users', checkSessionUser);
// userRouter.post('/users', createUser);
userRouter.post('/users', checkLoginUser);

export default userRouter;
 