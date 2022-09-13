const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        CardContent:String,
        CardDone:Boolean,
        CardDue:String,
        CardTitle:String,
    },
    {
        collection: "CardData",
    }
);



module.exports = mongoose.model("CardData", UserSchema);