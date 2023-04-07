// dependencies
// import Axios from ('axiox')
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// BCS1 อยู่ในระบบได้ ถึงจะรีเฟส หรือ เปลี่ยนแถป  ตามเวลาที่เราตั้ง
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// เข้ารหัส
const bcrypt = require("bcrypt");
const { application } = require("express");
const saltRounds = 10;

app.use(express.json());

// BCS2ใช้ kookie , session ผ่าน cors (http)
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
// BCS3
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//BCS4
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

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "napatshop",
});

// add up new user
app.post("/create", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthDate = req.body.birthDate;
    const passWord = req.body.passWord;

    bcrypt.hash(passWord, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query(
            "INSERT INTO user (first_name , last_name , email , phone , birthdate , password) VALUES(?,?,?,?,?,?)",
            [firstName, lastName, email, phone, birthDate, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

// BCS8
app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

// เช็คล็อกอิน
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE email = ? ", username, (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    //BCS5
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                } else {
                    res.send({ message: "ระบุไม่ถูกต้อง username/passwword" });
                }
            });
        } else {
            res.send({ message: "ไม่พบข้อมูล" });
        }
    });
});

app.listen("3001", () => {
    console.log("Srever is running on port 3001");
});
