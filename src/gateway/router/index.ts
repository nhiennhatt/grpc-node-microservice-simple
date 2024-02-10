import { Router } from "express";
import articleRouter from "./article.router";

const rootRouter = Router();

rootRouter.use("/articles", articleRouter);

export default rootRouter;
