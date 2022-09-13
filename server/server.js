const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//import UserData from "UserModels.js";
const User = require('./Models/UserModels');
const { response } = require("express");



dotenv.config();
const app= express();
app.use(express.json())

const url = "mongodb://localhost:27017"

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connected to monngodb");
    } catch (error) {
        console.log(error);
    }
}

/*
app.get('/User', function(req, res){
    User.find({}, function(err, User){
        res.send(User)
    })
 })
 

app.post("/User", async (req,res) => {
    const{username, password} = req.boby;
    try {
        await User.create({
            username: "",
            password: "",
        });
        res.send({Status: "created"});
    } catch (error) {
        res.send({status: "error"});
    }
});

*/
/*
app.post("/register", (req,res) => {})
*/
connect();
app.listen(8000, () => {
    console.log("server is running");
});