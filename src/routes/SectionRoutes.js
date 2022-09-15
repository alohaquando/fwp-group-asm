// Get all
import SectionModel from "../models/SectionModel.js";
import express from "express";
const SectionRouter = express.Router();

SectionRouter.get("/", async (req, res) => {
  try {
    const sections = await SectionModel.find();
    res.json(sections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single
SectionRouter.get("/:id", async (req, res) => {
  try {
    const section = await SectionModel.findById(req.params.id);
    if (section) {
      res.status(200);
      res.json(section);
    } else {
      res.status(404);
      res.json({ error: "section not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
SectionRouter.post("/", async (req, res) => {
  const section = new SectionModel(req.body);
  try {
    await section.save();
    res.status(200).json(section);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
SectionRouter.patch("/:id", async (req, res) => {
  try {
    const section = await SectionModel.findById(req.params.id);
    req.body.title ? (section.title = req.body.title) : {};
    req.body.lists ? (section.lists = req.body.lists) : {};

    await section.save();
    res.send(section);
  } catch {
    res.status(404).json({ error: "section does not exist!" });
  }
});

// Delete
SectionRouter.delete("/:id", async (req, res) => {
  try {
    const section = await SectionModel.findByIdAndDelete(req.params.id);
    if (section) {
      res.send(`section titled ${section.title} has been deleted`);
    } else {
      res.status(404).json({ error: "section not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default SectionRouter;
