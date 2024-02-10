import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { IArticleServiceServer, Article, Articles } from "@grpc/article";
import { ArticleModel } from "../mongodb/Article.Schema";

export const getAllArticles: IArticleServiceServer["getAllArticles"] = (call, callback) => {
  ArticleModel.find().lean()
    .then((result) => {
      callback(null,
        new Articles().setArticlesList(
          result.map(
            (article) => {
              return new Article()
                .setTitle(article.title)
                .setContent(article.content)
                .setId(article._id.toString())
                .setStatus(article.status.valueOf())
                .setCreatedAt(Timestamp.fromDate(article.createdAt))
                .setUpdatedAt(Timestamp.fromDate(article.updatedAt))
            }
          )
        )
      )
    })
}
