import User from "../models/UserModel.js";
import express, { response } from "express";
// import Finddb from "../models/UserModel.js";
import bcrypt from "bcrypt";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import cors from "cors";
// import userRouter from "../routes/UserRoute.js";


// const saltRounds = 10;
// const app = express() 


// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//     session({
//         key: "userId",
//         secret: "subscribe",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             expires: 60 * 60 * 24,
//         },
//     })
// );

// export default app.use(userRouter)

// };
// app.get("/login", (req, res) => {
//     if (req.session.user) {
//         res.send({ loggedIn: true, user: req.session.user });
//     } else {
//         res.send({ loggedIn: false });
//     }
// });
export const checkSessionUser =  (req, res) => {
    
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
        // console.log(error, "Session Error");
        // res.status(500).json({ error: "Error checking session" });
    }
}
export const checkLoginUser = async (req, res ) => {
    
   
     try {  
        
        // const username = req.body.username;
        // const password = req.body.password;
        // const user2 = user2s
       
        const user = await User.findOne({
            where: {
                email: req.body.username
                // password: password
            },
        })
        // .then(data => console.log(data))
        // const data = response.loggedIn = true
    //  (data = data)
        if(user){  
        if (user) {
            const password_valid = await bcrypt.compare(
                req.body.password,
                user.password
            );
            console.log("เมลผ่าน");
            // const resultPass = User.findOne({
            //     where: {
            //         // email: username,
            //         password: password,
            //     },

            // })
            // .then((data2) => {

            if (password_valid) {
                // const data = loggedIn = true
                // if(username,resultMail.email){
                    res.send(user)
                    // res = {send:(next) =>{console.log(next)}}
                    // res.send(next())
                    // app.send(user)
                    // res.status(data).send(user)
                console.log("รหัสผ่าน");
                // }
                // if ((resultPass = password)) {
                //     console.log("รหัสผ่าน");
                // }
            } else {
                
                res.send({ message: "ระบุไม่ถูกต้อง username/passwword" });
                console.log("รหัสไม่ผ่าน");
            }
        } else {
            res.send({ message: "ไม่พบข้อมูล" });
            console.log("เมลไม่ผ่าน");
        }}
        // .then((data) => {
        //     // console.log(data,result2)
        //     if (data) {
        //         bcrypt.compare(password, result2.password, (err, response) => {
        //             if (response) {
        //                 // const isPasswordValid = bcrypt.compare(password, result2.password);
        //                 //  if (isPasswordValid) {
        //                 //    req.session.user = result2
        //                 // console.log(req.session.user);
        //                 // console.log();
        //                 // res.send(user2);
        //                 res.send({
        //                     // message: "รหัสถูก",user2
        //                 });
        //             } else {
        //                 // res.send(user2);
        //                 res.send({
        //                     message: "ระบุไม่ถูกต้อง username/passwword",
        //                     data,
        //                 });
        //                 console.log(password);
        //                 // res.send((result))
        //             }
        //         });
        //     } else {
        //         res.send({ message: "ไม่พบข้อมูล" });
        //         console.log("");
        //     }
        // });
        // });
    } catch (error) {
        console.log(error, "login error");
    }
};
