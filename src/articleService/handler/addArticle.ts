import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { ArticleModel } from "../mongodb/Article.Schema";
import { ArticleIdentity, IArticleServiceServer } from "@grpc/article";
import { Status } from "@grpc/grpc-js/build/src/constants";

export const addArticle: IArticleServiceServer["addArticle"] = (call, callback) => {
  const newArticle = call.request;
  ArticleModel.create({
    content: newArticle.getContent(),
    status: newArticle.getStatus(),
    title: newArticle.getTitle(),
  }).then((result) => {
    if (result.errors) {
      if (result.errors.name === "ValidationError")
        callback({
          code: Status.INVALID_ARGUMENT,
          message: "Invalid payload"
        })
    } else {
      callback(null,
        new ArticleIdentity()
          .setArticleId(result._id.toString())
          .setCreatedAt(Timestamp.fromDate(result.createdAt))
          .setUpdatedAt(Timestamp.fromDate(result.updatedAt))
      )
    }
  })
}
