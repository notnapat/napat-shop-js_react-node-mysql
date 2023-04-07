
// Importing the express module
const express = require("express");
const app = express()
 
// Creating First Middleware
app.use("/", (req, res, next) => {
    console.log("Hello");
    // The next() function called
    next();
})
 
// Creating second middleware
app.get("/", (req, res, next) => {
    console.log("Get Request")
})
 
// Execution the server
app.listen(3000, () => {
    console.log("Server is Running")
}) 