const express = require("express");
const router = express.Router();
const auth = require("./Middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
require("dotenv").config();

const User = require("./Models/UserModels");

router.post(
    '/',
    [
        check('username', 'require username').not().isEmpty(),
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (error.isEmpty()) {
            return res.status(400).json({error: error.array() });
        }

        const {username, password} = req.body;

        try {
            if (await User.findOne({username})) {
                return res.status(400).json({error: [{msg: 'User already exists'}] });
            }

            const user = new User({
                username,
                password: await bcrypt.hash(password,await bcrypt.genSalt(10)),
            });

            await user.save();

            jwt.sign(
                {
                    user: {
                        id: user.id,
                    },
                },
                process.env.JWT_SECRET,
                {expiresIn: 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({ token })
                }

            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;