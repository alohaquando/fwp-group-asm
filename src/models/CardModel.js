import mongoose from "mongoose";
import ChecklistModel from "./ChecklistModel.js";

export const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  type: { type: String, default: "note" },
  content: { type: String, required: true },
  checklistItems: [ChecklistModel.schema],
});

export default mongoose.model("Card", CardSchema);
