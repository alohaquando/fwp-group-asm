const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        crsName:String,
    },
    {
        collection: "SectionData",
    }
);



module.exports = mongoose.model("SectionData", UserSchema);