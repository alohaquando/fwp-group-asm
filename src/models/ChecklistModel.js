import mongoose from "mongoose";

export const ChecklistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

export default mongoose.model("Checklist", ChecklistSchema);
