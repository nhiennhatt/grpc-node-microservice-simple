import { articleClient } from "../client";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IArticle } from "../../types/Article";
import { Article } from "@grpc/article";

export class ArticleService {
  gatAllArticles(): Promise<IArticle[]> {
    return new Promise((resolve, reject) => {
      articleClient.getAllArticles(new Empty(), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.getArticlesList().map((article) => {
            return {
              _id: article.getId(),
              title: article.getTitle(),
              content: article.getContent(),
              status: article.getStatus().valueOf(),
              updatedAt: article.getUpdatedAt()?.toDate(),
              createdAt: article.getCreatedAt()?.toDate()
            }
          }) as IArticle[]);
        }
      })
    })
  }

  addArticle(article: Pick<IArticle, "title" | "content" | "status">): Promise<Pick<IArticle, "_id"> | IArticle> {
    return new Promise((resolve, reject) => {
      articleClient.addArticle(
        new Article().setTitle(article.title).setContent(article.content).setStatus(article.status.valueOf()),
        (error, response) => {
          if (error) {
            reject(error)
          } else {
            resolve({
              _id: response.getArticleId(),
              createdAt: response.getCreatedAt()?.toDate(),
              updatedAt: response.getUpdatedAt()?.toDate()
            })
          }
        }
      )
    })
  }
}
