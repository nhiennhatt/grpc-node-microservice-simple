import { Schema, model } from "mongoose";
import { IArticle, ArticleStatusEnum } from "../../types/Article";

export const ArticleSchema = new Schema<IArticle>({
  content: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: Number, enum: ArticleStatusEnum, required: true },
  createdAt: { type: "Date", default: Date.now },
  updatedAt: { type: "Date" , default: Date.now},
}, {
  _id: true
});

export const ArticleModel = model<IArticle>("articles", ArticleSchema);
