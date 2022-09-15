// Get all
import ListModel from "../models/ListModel.js";
import express from "express";
const ListRouter = express.Router();

ListRouter.get("/", async (req, res) => {
  try {
    const lists = await ListModel.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single
ListRouter.get("/:id", async (req, res) => {
  try {
    const list = await ListModel.findById(req.params.id);
    if (list) {
      res.status(200);
      res.json(list);
    } else {
      res.status(404);
      res.json({ error: "list not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
ListRouter.post("/", async (req, res) => {
  const list = new ListModel(req.body);
  try {
    await list.save();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
ListRouter.patch("/:id", async (req, res) => {
  try {
    const list = await ListModel.findById(req.params.id);
    req.body.title ? (list.title = req.body.title) : {};
    req.body.due ? (list.due = req.body.due) : {};
    req.body.done ? (list.done = req.body.done) : {};
    req.body.cards ? (list.cards = req.body.cards) : {};

    await list.save();
    res.send(list);
  } catch {
    res.status(404).json({ error: "list does not exist!" });
  }
});

// Delete
ListRouter.delete("/:id", async (req, res) => {
  try {
    const list = await ListModel.findByIdAndDelete(req.params.id);
    if (list) {
      res.send(`list titled ${list.title} has been deleted`);
    } else {
      res.status(404).json({ error: "list not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default ListRouter;
