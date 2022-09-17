// Note card API
// Get all
import NoteCardModel from "../models/NoteCardModel.js";
import express from "express";
import SectionModel from "../models/SectionModel.js";
const CardRouter = express.Router();

// Get

// Create
CardRouter.post("/:parent_id", async (req, res) => {
  const newCard = new NoteCardModel(req.body);

  SectionModel.findOneAndUpdate(
    { "lists._id": req.params.parent_id },
    { $push: { "lists.$.cards": newCard } },
    function (err, section) {
      if (err) {
        console.log(err);
      }
      res.send(section);
    }
  );
});

// Update
CardRouter.patch("/:parent_id/:id", async (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists.cards._id": req.params.id },
    {
      $set: {
        "lists.$[lists].cards.$[cards].done": req.body.done,
        "lists.$[lists].cards.$[cards].title": req.body.title,
        "lists.$[lists].cards.$[cards].due": req.body.due,
        "lists.$[lists].cards.$[cards].content": req.body.content,
      },
    },
    {
      arrayFilters: [
        { "lists._id": req.params.parent_id },
        { "cards._id": req.params.id },
      ],
    },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

CardRouter.patch("/:parent_id/:id/done", async (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists.cards._id": req.params.id },
    {
      $set: {
        "lists.$[lists].cards.$[cards].done": true,
      },
    },
    {
      arrayFilters: [
        { "lists._id": req.params.parent_id },
        { "cards._id": req.params.id },
      ],
    },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

CardRouter.patch("/:parent_id/:id/undone", async (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists.cards._id": req.params.id },
    {
      $set: {
        "lists.$[lists].cards.$[cards].done": false,
      },
    },
    {
      arrayFilters: [
        { "lists._id": req.params.parent_id },
        { "cards._id": req.params.id },
      ],
    },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

// Delete
CardRouter.delete("/:parent_id/:id", (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists._id": req.params.parent_id },
    { $pull: { "lists.$[].cards": { _id: req.params.id } } },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

export default CardRouter;
