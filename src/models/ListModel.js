import mongoose from "mongoose";
import Schema from "mongoose";

// TODO: ObjectID reference correctly

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: Date,
  done: { type: Boolean, default: false },
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
});

export default mongoose.model("List", ListSchema);
