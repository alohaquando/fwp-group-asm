import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:String,
        password:String,
    },
    {
        collection: "UserData",
    }
);




module.exports = mongoose.model("UserData", UserSchema);