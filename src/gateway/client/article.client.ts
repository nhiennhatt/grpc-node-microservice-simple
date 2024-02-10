import { ArticleServiceClient } from "@grpc/article";
import * as grpcJs from "@grpc/grpc-js";

export const articleClient = new ArticleServiceClient(process.env.ARTICLE_SERVICE_ADDRESS || "", grpcJs.credentials.createInsecure());
