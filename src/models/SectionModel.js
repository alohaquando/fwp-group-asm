import mongoose from "mongoose";
import Schema from "mongoose";

// TODO: ObjectID reference correctly

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  list: [{ type: Schema.Types.ObjectId }],
});

export default mongoose.model("Section", SectionSchema);