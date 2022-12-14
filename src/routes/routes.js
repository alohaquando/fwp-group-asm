import express from "express";
import CardRouter from "./CardRoutes.js";
import ListRouter from "./ListRoutes.js";
import SectionRouter from "./SectionRoutes.js";
import SectionModel from "../models/SectionModel.js";
import ChecklistRouter from "./ChecklistRoutes.js";

const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use("/cards", CardRouter);
apiRouter.use("/lists", ListRouter);
apiRouter.use("/sections", SectionRouter);
apiRouter.use("/checklists", ChecklistRouter);

apiRouter.get("/", async (req, res) => {
  try {
    const sections = await SectionModel.find();
    res.json(sections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default apiRouter;
