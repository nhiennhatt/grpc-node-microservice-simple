import { ArticleStatusEnum } from "./ArticleStatus.enum";

export interface IArticle {
  _id: string;
  title: string;
  content: string;
  status: ArticleStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}