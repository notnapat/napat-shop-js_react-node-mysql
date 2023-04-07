import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./pages.style/userSignUp.css";
// import { useNavigate } from "react-router-dom";

function UserSignUp() {
    //     // ฟอร์มสมัคร user
    //     const [firstName, setFirstName] = useState("");
    //     const [lastName, setLastName] = useState("");
    //     const [email, setEmail] = useState("");
    //     const [phone, setPhone] = useState(0);
    //     const [birthDate, setBirthDate] = useState("");
    //     const [passWord, setPassWord] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    //     const navigate = useNavigate();

    //BCS6

    //     Axios.defaults.withCredentials = true; ### ถ้าใช้เป็น mysql น่าจะต้องใช้ แต่ squli mysql2 ไม่น่าต้องใช้

    //    ใช้ e เพื่อไม่รีเฟส
    //     const submitUserSingUp = async (e) => {
    //       e.preventDefault();
    //     const submitUserSingUp = async () => {
    //         try {
    //             await Axios.post("http://localhost:3002/users", {
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 email: email,
    //                 phone: phone,
    //                 birthDate: birthDate,
    //                 passWord: passWord,
    //             });
    //             navigate("/");
    //         } catch (error) {
    //             console.log(error, "sigup save error");
    //         }
    //     };

    // funtion login
//     const login = async () => {
//         try {
//             await Axios.post("http://localhost:3002/users", {
//                 username: username,
//                 password: password,
//             }).then((response) => {
//                 if (response.data.message) {
//                     // console.log('')
//                     console.log(response.data, "111ผ่าน");
//                     setLoginStatus(response.data.message);
//                 } else {
//                     console.log(response.data, "222");
//                     //     setLoginStatus(response.data[0].phone);
//                     setLoginStatus(response.data.phone);
//                     // ("http://localhost:3000")
//                     // .then("./navbar/NavbarIndex.js")
//                     // window.location = '/'
//                     //     navigate("/");
//                 }
//             });
//         } catch (error) {
//             console.log(error, "con not login or login error");
//         }
//     };

    const login = async () => {
        try {
            await Axios.post("http://localhost:3002/users", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    // console.log('')
                    console.log(response.data, "111ผ่าน");
                    setLoginStatus(response.data.message);
                } else {
                    console.log(response.data, "222");
                    //     setLoginStatus(response.data[0].phone);
                    setLoginStatus(response.data.phone);
                    // ("http://localhost:3000")
                    // .then("./navbar/NavbarIndex.js")
                    // window.location = '/'
                    //     navigate("/");
                }
            });
        } catch (error) {
            console.log(error, "con not login or login error");
        }
    };

    // //     BCS7
    //     useEffect( ()  => {
    //        Axios.get("http://localhost:3002/users").then((response) => {
    //             //BCS10
    //             if (response.data.loggedIn === true)
    //                 //BCS9
    //             //     setLoginStatus(response.data.user[0].email);
    //                 setLoginStatus(response.data.user.email);

    //             // console.log(response)
    //         });
    //     }, []);
    return (
        <div className="container blackwhite">
            <h1>สมัครสมาชิค</h1>
            <div className="formusersignup">
                {/* <form action="">
                    <div className="forinput">
                        <label htmlFor="first-name" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ระบุชื่อ"
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="forinput">
                        <label htmlFor="last-name" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ระบุนามสกุล"
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="forinput">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="forinput">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="เบอร์โทรศัพ"
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="forinput">
                        <label htmlFor="birthdate" className="form-label">
                            BirthDate
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="วันเกิด"
                            onChange={(event) => {
                                setBirthDate(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="forinput">
                        <label htmlFor="password" className="form-label">
                            PassWord
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="รหัสผ่าน"
                            onChange={(event) => {
                                setPassWord(event.target.value);
                            }}
                        ></input>
                    </div>
                    <button
                        className="btn btn-success"
                        // onClick={submitUserSingUp}
                    >
                        ตกลง
                    </button>
                </form> */}
                <div className="login">
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="email"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />

                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="btn btn-success" onClick={login}>
                        login
                    </button>
                </div>
                <h2>{loginStatus}</h2>
            </div>
        </div>
    );
}

export default UserSignUp;
