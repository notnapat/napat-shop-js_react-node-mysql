import express, { response } from "express";
import User from "../models/UserModel.js";
// import Finddb from "../models/UserModel.js";
import bcrypt from "bcrypt";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import cors from "cors";

const saltRounds = 10;
const app = express();

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

// app.use(
//     cors({
//         origin: ["http://localhost:3000"],
//         methods: ["GET", "POST"],
//         credentials: true,
//     })
// );
// export const createUser = (req, res) => {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const birthDate = req.body.birthDate;
//     const passWord = req.body.passWord;

//     bcrypt.hash(passWord, saltRounds, async (err, hash) => {
//         if (err) {
//             console.log(err, "bcrypt error");
//         }
//         try {
//             await User.create({
//                 first_name: firstName,
//                 last_name: lastName,
//                 email: email,
//                 phone: phone,
//                 birthdate: birthDate,
//                 password: hash,
//             });
//             res.status(201).json({ msg: "Product Successfuly" });
//         } catch (error) {
//             console.log(error);
//         }
//     });
// };

// export const checkSessionUser = (req, res) => {
//     if (req.session.user) {
//         res.send({ loggedIn: true, user: req.session.user });
//     } else {
//         res.send({ loggedIn: false });
//         console.log(error, "Session Error");
//         res.status(500).json({ error: "Error checking session" });
//     }
// };

// export const checkLoginUser = async (req, res) => {
//     try {
//         const username = req.body.username;
//         const password = req.body.password;

//         const result = await User.findOne({
//             where: {
//                 email: username,
//             },
//         });

//         if (result.length > 0) {
//             const isPasswordValid = await bcrypt.compare(
//                 password,
//                 result.password
//             );
//             if (isPasswordValid) {
//                 req.session.user = result;
//                 res.send(result);
//             } else {
//                 res.send({ message: "Incorrect username/password" });
//             }
//         } else {
//             res.send({ message: "No data found" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Error logging in" });
//     }
// };

export const checkLoginUser = (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        // const user2 = user2s
        const result2 = User.findOne({
            where: {
                email: username,
            },
        })
            // .then ((user2) => {
            // console.log("got user11", user2.get({ plain: true }))
            // console.log("got user11")
            // if(res)
            // } )

            // .catch((err) => console.error("error get user22:", err));
            // if (username !== result2) {
            //     console.log(ชื่อไม่ถูก);
            //     res.send({ err: err });
            // }
            // if (result2) {
            //    bcrypt res.send(result2);

            .then((data) => {
                // console.log(user2,result2)
                if (data) {
                    bcrypt.compare(
                        password,
                        result2.password,
                        (err, response) => {
                            if (response) {
                                // const isPasswordValid = bcrypt.compare(password, result2.password);
                                //  if (isPasswordValid) {
                                //    req.session.user = result2
                                // console.log(req.session.user);
                                // console.log();
                                // res.send(user2);
                                res.send({
                                    // message: "รหัสถูก",user2
                                });
                            } else {
                                // res.send(user2);
                                res.send({
                                    message:
                                        "ระบุไม่ถูกต้อง username/passwword",data
                                  
                                });
                                console.log(password);
                                // res.send((result))
                            }
                        }
                    );
                } else {
                    res.send({ message: "ไม่พบข้อมูล" });
                    console.log("aaaaaaaaaa");
                }
            });
    } catch (error) {
        console.log(error, "login error");
    }
};

// if (result) {
//   const isPasswordValid = await bcrypt.compare(password, result.password);
//   if (isPasswordValid) {
//     req.session.user = result;
//     res.send(result);
//   } else {
//     res.send({ message: "Incorrect username/password" });
//   }
// }

//         if (resultdb.length > 0) {
//             bcrypt.compare(
//                 password,
//                 resultdb[0].password,
//                 (error, response) => {
//                     if (response) {
//                         //BCS5
//                         req.session.user = resultdb;
//                         console.log(req.session.user);
//                         res.send(resultdb);
//                     } else {
//                         res.send({
//                             message: "ระบุไม่ถูกต้อง username/passwword",
//                         });
//                     }
//                 }
//             );
//         } else {
//             res.send({ message: "ไม่พบข้อมูล" });
//             console.log("aaaaaaaaaa");
//         }
//     } catch (error) {
//         console.log(error, "login error");
//     }
// };

// export const checkLoginUser = async (req, res) => {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     const result = await User.findOne({
//       where: {
//         email: username,
//       },
//     });

//     if (result) {
//       const isPasswordValid = await bcrypt.compare(password, result.password);
//       if (isPasswordValid) {
//         req.session.user = result;
//         res.send(result);
//       } else {
//         res.send({ message: "Incorrect username/password" });
//       }
//     } else {
//       res.send({ message: "No data found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error logging in" });
//   }
// };
