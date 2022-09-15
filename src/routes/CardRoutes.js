// Note card API
// Get all
import NoteCardModel from "../models/NoteCardModel.js";
import express from "express";
const CardRouter = express.Router();

CardRouter.get("/", async (req, res) => {
  try {
    const cards = await NoteCardModel.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single
CardRouter.get("/:id", async (req, res) => {
  try {
    const card = await NoteCardModel.findById(req.params.id);
    if (card) {
      res.status(200);
      res.json(card);
    } else {
      res.status(404);
      res.json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
CardRouter.post("/", async (req, res) => {
  const card = new NoteCardModel(req.body);
  try {
    await card.save();
    res.status(200).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
CardRouter.patch("/:id", async (req, res) => {
  try {
    const card = await NoteCardModel.findById(req.params.id);
    req.body.title ? (card.title = req.body.title) : {};
    req.body.due ? (card.due = req.body.due) : {};
    req.body.content ? (card.content = req.body.content) : {};
    req.body.done ? (card.done = req.body.done) : {};

    await card.save();
    res.send(card);
  } catch {
    res.status(404).json({ error: "Card does not exist!" });
  }
});

// Delete
CardRouter.delete("/:id", async (req, res) => {
  try {
    const card = await NoteCardModel.findByIdAndDelete(req.params.id);
    if (card) {
      res.send(`Card titled ${card.title} has been deleted`);
    } else {
      res.status(404).json({ error: "Card not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default CardRouter;
