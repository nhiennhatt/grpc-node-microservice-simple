// package: 
// file: article.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Article extends jspb.Message { 
    getId(): string;
    setId(value: string): Article;
    getTitle(): string;
    setTitle(value: string): Article;
    getContent(): string;
    setContent(value: string): Article;
    getStatus(): Status;
    setStatus(value: Status): Article;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Article.AsObject;
    static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Article;
    static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
    export type AsObject = {
        id: string,
        title: string,
        content: string,
        status: Status,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Articles extends jspb.Message { 
    clearArticlesList(): void;
    getArticlesList(): Array<Article>;
    setArticlesList(value: Array<Article>): Articles;
    addArticles(value?: Article, index?: number): Article;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Articles.AsObject;
    static toObject(includeInstance: boolean, msg: Articles): Articles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Articles, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Articles;
    static deserializeBinaryFromReader(message: Articles, reader: jspb.BinaryReader): Articles;
}

export namespace Articles {
    export type AsObject = {
        articlesList: Array<Article.AsObject>,
    }
}

export class ArticleIdentity extends jspb.Message { 
    getArticleId(): string;
    setArticleId(value: string): ArticleIdentity;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ArticleIdentity;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ArticleIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleIdentity): ArticleIdentity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleIdentity;
    static deserializeBinaryFromReader(message: ArticleIdentity, reader: jspb.BinaryReader): ArticleIdentity;
}

export namespace ArticleIdentity {
    export type AsObject = {
        articleId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum Status {
    ACTIVE = 0,
    DE_ACTIVE = 1,
}
