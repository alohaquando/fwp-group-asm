import mongoose from "mongoose";

export const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  type: { type: String, default: "note" },
  content: { type: String, required: true },
});

export default mongoose.model("Card", CardSchema);
