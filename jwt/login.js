const express = require("express");
const router = express.Router();
const auth = require("./Middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
require("dotenv").config();

const User = require("./Models/UserModels");


app.post("/login" , async(req,res) => {
    try {
        const {username, password} = req.body;

        if (!(username && password)) {
            res.status(400).send("All inout is required");
        }
        const user = await User.findOne({username}) ;
    
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user_.id, username}, 
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h",
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send("Invalid credentials");
    } catch (err) {
        console.log(err);
    }

});

module.exports = login;