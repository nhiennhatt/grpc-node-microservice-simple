import { ArticleServiceClient } from "@grpc/article";
import * as grpcJs from "@grpc/grpc-js";

const address = `${process.env.ARTICLE_SERVICE_HOST || "localhost"}:${process.env.ARTICLE_SERVICE_PORT}`

export const articleClient = new ArticleServiceClient(address, grpcJs.credentials.createInsecure());
