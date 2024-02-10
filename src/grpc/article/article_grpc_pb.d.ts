// package: 
// file: article.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as article_pb from "./article_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IArticleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllArticles: IArticleServiceService_IgetAllArticles;
    addArticle: IArticleServiceService_IaddArticle;
}

interface IArticleServiceService_IgetAllArticles extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, article_pb.Articles> {
    path: "/ArticleService/getAllArticles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<article_pb.Articles>;
    responseDeserialize: grpc.deserialize<article_pb.Articles>;
}
interface IArticleServiceService_IaddArticle extends grpc.MethodDefinition<article_pb.Article, article_pb.ArticleIdentity> {
    path: "/ArticleService/addArticle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<article_pb.Article>;
    requestDeserialize: grpc.deserialize<article_pb.Article>;
    responseSerialize: grpc.serialize<article_pb.ArticleIdentity>;
    responseDeserialize: grpc.deserialize<article_pb.ArticleIdentity>;
}

export const ArticleServiceService: IArticleServiceService;

export interface IArticleServiceServer extends grpc.UntypedServiceImplementation {
    getAllArticles: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, article_pb.Articles>;
    addArticle: grpc.handleUnaryCall<article_pb.Article, article_pb.ArticleIdentity>;
}

export interface IArticleServiceClient {
    getAllArticles(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    getAllArticles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    getAllArticles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    addArticle(request: article_pb.Article, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
    addArticle(request: article_pb.Article, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
    addArticle(request: article_pb.Article, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
}

export class ArticleServiceClient extends grpc.Client implements IArticleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllArticles(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    public getAllArticles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    public getAllArticles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_pb.Articles) => void): grpc.ClientUnaryCall;
    public addArticle(request: article_pb.Article, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
    public addArticle(request: article_pb.Article, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
    public addArticle(request: article_pb.Article, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_pb.ArticleIdentity) => void): grpc.ClientUnaryCall;
}
