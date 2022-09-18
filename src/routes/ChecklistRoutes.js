import CardModel from "../models/CardModel.js";
import express from "express";

import ChecklistModel from "../models/ChecklistModel.js";
import SectionModel from "../models/SectionModel.js";
import CardRouter from "./CardRoutes.js";
const ChecklistRouter = express.Router();

// Update
ChecklistRouter.get("/:id", (req, res) => {
  SectionModel.findOne(
    { "lists.cards.checklistItems._id": req.params.id },
    function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section._id);
    }
  );
});

ChecklistRouter.patch("/:list_id/:card_id/:id/done", async (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists.cards.checklistItems._id": req.params.id },
    {
      $set: {
        "lists.$[lists].cards.$[cards].checklistItems.$[checklists].done": true,
      },
    },
    {
      arrayFilters: [
        { "lists._id": req.params.list_id },
        { "cards._id": req.params.card_id },
        { "checklists._id": req.params.id },
      ],
    },
    await function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

ChecklistRouter.patch("/:list_id/:card_id/:id/undone", async (req, res) => {
  SectionModel.findOneAndUpdate(
    { "lists.cards.checklistItems._id": req.params.id },
    {
      $set: {
        "lists.$[lists].cards.$[cards].checklistItems.$[checklists].done": false,
      },
    },
    {
      arrayFilters: [
        { "lists._id": req.params.list_id },
        { "cards._id": req.params.card_id },
        { "checklists._id": req.params.id },
      ],
    },
    await function (err, section) {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.send(section);
    }
  );
});

export default ChecklistRouter;
