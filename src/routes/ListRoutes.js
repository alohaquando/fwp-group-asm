// Get all
import ListModel from "../models/ListModel.js";
import express from "express";
import SectionModel from "../models/SectionModel.js";
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
// Add new list to section
ListRouter.post("/", (req, res) => {
  const newList = new ListModel(req.body);

  SectionModel.findByIdAndUpdate(
    req.body.parent_id,
    { $push: { lists: newList } },
    { safe: true, upsert: false },
    function (err, section) {
      res.send(section);
    }
  );
});

// Update
ListRouter.patch("/:parent_id/:id", (req, res) => {
  SectionModel.findOneAndUpdate(
    { _id: req.params.parent_id, "lists._id": req.params.id },
    {
      $set: {
        "lists.$.done": req.body.done,
        "lists.$.title": req.body.title,
        "lists.$.due": req.body.due,
      },
    },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

// Set done
ListRouter.patch("/:parent_id/:id/done", (req, res) => {
  SectionModel.findOneAndUpdate(
    { _id: req.params.parent_id, "lists._id": req.params.id },
    { $set: { "lists.$.done": true } },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

ListRouter.patch("/:parent_id/:id/undone", (req, res) => {
  SectionModel.findOneAndUpdate(
    { _id: req.params.parent_id, "lists._id": req.params.id },
    { $set: { "lists.$.done": false } },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

// Delete
ListRouter.delete("/:parent_id/:id", (req, res) => {
  SectionModel.findOneAndUpdate(
    { _id: req.params.parent_id },
    { $pull: { lists: { _id: req.params.id } } },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

export default ListRouter;
