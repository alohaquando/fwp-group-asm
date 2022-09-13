const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        AsgmtDone:Boolean,
        AsgmtDue:String,
        AsgmtName:String,
    },
    {
        collection: "ListData",
    }
);



module.exports = mongoose.model("ListData", UserSchema);
