import mongoose from "mongoose";
import CardModel from "./CardModel.js";

export const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  cards: [CardModel.schema],
});

export default mongoose.model("List", ListSchema);
