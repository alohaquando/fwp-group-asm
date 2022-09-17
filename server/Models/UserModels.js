const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:String,
        password:String,
        token: String,
    },
    {
        collection: "User",
    },
);

console.log("UserModels work");


module.exports = mongoose.model("User", UserSchema);
