import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
//import UserData from "UserModels.js";




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



const User = require('UserModels.js');
app.post("/register", async (req,res) => {
    const{username, password} = req.boby;
    try {
        await User.create({
            username,
            password,
        });
        res.send({Status: "created"});
    } catch (error) {
        res.send({status: "error"})
    }
});

connect();
app.listen(8000, () => {
    console.log("server is running");
});