import mongoose from "mongoose";

// TODO: Add checklist card model

const NoteCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  type: { type: String, default: "note" },
  content: { type: String, required: true },
});

export default mongoose.model("Card", NoteCardSchema);
