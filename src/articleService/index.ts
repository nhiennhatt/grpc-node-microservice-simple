import "dotenv/config";
import * as grpcJs from "@grpc/grpc-js";
import { service } from "./service";
import { startMongo } from "./mongodb/mongo";
import { ArticleServiceService } from "@grpc/article";

startMongo();
const server = new grpcJs.Server();

server.addService(ArticleServiceService, service);

server.bindAsync("localhost:50051", grpcJs.ServerCredentials.createInsecure(), (error, port) => {
  if (error) throw error;
  console.log(`Server is running at port ${port}`);
})
