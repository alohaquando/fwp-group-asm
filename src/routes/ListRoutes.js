// Get all
import ListModel from "../models/ListModel.js";
import express from "express";
import SectionModel from "../models/SectionModel.js";
import NoteCardModel from "../models/NoteCardModel.js";
import CardRouter from "./CardRoutes.js";
const ListRouter = express.Router();

// Get all
ListRouter.get("/", (req, res) => {
  SectionModel.distinct("lists", {}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

ListRouter.get("/:id", async (req, res) => {
  SectionModel.findOne({ "lists._id": req.params.id }, function (err, section) {
    if (err) {
      console.log(err);
    }
    res.send(section);
  });
});

// Create
// Add new list to section
ListRouter.post("/:parent_id", (req, res) => {
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
    { "lists._id": req.params.id },
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
    { "lists._id": req.params.id },
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
    { "lists._id": req.params.id },
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
