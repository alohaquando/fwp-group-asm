const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//import UserData from "UserModels.js";
const User = require('./Models/UserModels');



dotenv.config();
const app= express();

const uri = "mongodb://localhost:27017"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to monngodb");
    } catch (error) {
        console.log(error);
    }
}



app.post("/register", async (req,res) => {
    const{username, password} = req.boby;
    try {
        await User.create({
            username,
            password,
        });
        res.send({Status: "created"});
    } catch (error) {
        res.send({status: "error"});
    }
});

connect();
app.listen(8000, () => {
    console.log("server is running");
});