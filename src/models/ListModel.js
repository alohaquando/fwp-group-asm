import mongoose from "mongoose";
import NoteCardModel from "./NoteCardModel.js";

export const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  cards: [NoteCardModel.schema],
});

export default mongoose.model("List", ListSchema);
