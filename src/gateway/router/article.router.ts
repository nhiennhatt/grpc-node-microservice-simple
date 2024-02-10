import { Router } from "express";
import articleController from "../controller/article.controller";
import { validateMiddleware } from "../middleware";
import { AddArticleValidation } from "../validation";

const articleRouter = Router();

articleRouter.get("/", articleController.getAllArticles);
articleRouter.post("/", validateMiddleware(AddArticleValidation), articleController.addArticle);

export default articleRouter;
