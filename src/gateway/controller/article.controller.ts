import { RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ArticleService } from "../service";
import { ArticleStatusEnum } from "../../types/Article";
import { AddArticleValidation } from "../validation";

const articleService = new ArticleService();

const getAllArticles: RequestHandler = (req, res, next) => {
  articleService.gatAllArticles()
    .catch(error => {
      next(error);
    })
    .then(articles => {
      res.json({ articles });
    });
};

const addArticle: RequestHandler<ParamsDictionary, any, AddArticleValidation> = (req, res, next) => {
  articleService.addArticle({
    title: req.body.title,
    content: req.body.content,
    status: ArticleStatusEnum.ACTIVE,
  })
    .catch(error => {
      next(error);
    })
    .then(article => {
      res.status(201).json(article);
    });
};

export default {
  getAllArticles,
  addArticle
};
