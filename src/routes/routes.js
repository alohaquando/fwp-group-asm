import express from "express";

const apiRouter = express.Router();

import CardRouter from "./CardRoutes.js";
import ListRouter from "./ListRoutes.js";
import SectionRouter from "./SectionRoutes.js";

apiRouter.use(express.json());
apiRouter.use("/cards", CardRouter);
apiRouter.use("/lists", ListRouter);
apiRouter.use("/sections", SectionRouter);

export default apiRouter;
