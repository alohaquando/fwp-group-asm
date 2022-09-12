const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:String,
        password:String,
    },
    {
        collection: "UserData",
    }
);

console.log("UserModels work");


module.exports = mongoose.model("UserData", UserSchema);
