const express = require("express");
const router = express.Router();
const auth = require("./Middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
require("dotenv").config();

const User = require("./Models/UserModels");
app.post("/register", async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!(username && password)) {
            res.status(400).send("All input are require");

        }
        const oldUser = await User.findOne({username}) ;

        if (oldUser) {
            return res.status(409).send("User already existed. please try login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            password: encryptedPassword,
        });

        const token = jwt.sign(
        {user_id: user._id, username},
        process.env.TOKEN_KEY,
        {
            expriresIn: "1h",
        }
        );

        user.token = token;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = register;

