// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var article_pb = require('./article_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_Article(arg) {
  if (!(arg instanceof article_pb.Article)) {
    throw new Error('Expected argument of type Article');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Article(buffer_arg) {
  return article_pb.Article.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ArticleIdentity(arg) {
  if (!(arg instanceof article_pb.ArticleIdentity)) {
    throw new Error('Expected argument of type ArticleIdentity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ArticleIdentity(buffer_arg) {
  return article_pb.ArticleIdentity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Articles(arg) {
  if (!(arg instanceof article_pb.Articles)) {
    throw new Error('Expected argument of type Articles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Articles(buffer_arg) {
  return article_pb.Articles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ArticleServiceService = exports.ArticleServiceService = {
  getAllArticles: {
    path: '/ArticleService/getAllArticles',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: article_pb.Articles,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Articles,
    responseDeserialize: deserialize_Articles,
  },
  addArticle: {
    path: '/ArticleService/addArticle',
    requestStream: false,
    responseStream: false,
    requestType: article_pb.Article,
    responseType: article_pb.ArticleIdentity,
    requestSerialize: serialize_Article,
    requestDeserialize: deserialize_Article,
    responseSerialize: serialize_ArticleIdentity,
    responseDeserialize: deserialize_ArticleIdentity,
  },
};

exports.ArticleServiceClient = grpc.makeGenericClientConstructor(ArticleServiceService);
