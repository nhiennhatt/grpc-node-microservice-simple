# GRPC - NodeJS microservice simple

## Introduction

It is a simple project that implements a microservice architecture. It includes 3 components:

- Gateway API:
    - NodeJS - ExpressJS
    - RestAPI
    - GRPC
- Service:
    - NodeJS
    - GRPC
- MongoDB

### GRPC / Protocol Buffers tools:

- protoc: protocol buffers compiler ([github](https://github.com/protocolbuffers/protobuf))
- protoc-gen-js (`js_out` plugin - [npm](https://www.npmjs.com/package/protoc-gen-js))
- grpc-tools (`grpc_out` plugin - [npm](https://www.npmjs.com/package/grpc-tools))
- grpc_tools_node_protoc_ts (`ts_out` plugin - [npm](https://www.npmjs.com/package/grpc_tools_node_protoc_ts))
- google-protobuf ([npm](https://www.npmjs.com/package/google-protobuf))
- @grpc/grpc-js ([npm](https://www.npmjs.com/package/@grpc/grpc-js))
