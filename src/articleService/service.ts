import { IArticleServiceServer } from "@grpc/article";
import { getAllArticles } from "./handler/getAllArticles";
import { addArticle } from "./handler/addArticle";

export const service: IArticleServiceServer = {
  getAllArticles,
  addArticle
}