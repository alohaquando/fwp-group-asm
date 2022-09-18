import mongoose from "mongoose";
import ListModel from "./ListModel.js";

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lists: [ListModel.schema],
});

export default mongoose.model("Section", SectionSchema);
