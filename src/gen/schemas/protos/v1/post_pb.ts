// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file schemas/protos/v1/post.proto (package schemas.protos.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';
import { User } from './user_pb';

/**
 * @generated from message schemas.protos.v1.Post
 */
export class Post extends Message<Post> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string text = 2;
   */
  text = '';

  /**
   * @generated from field: schemas.protos.v1.User user = 3;
   */
  user?: User;

  /**
   * @generated from field: int32 favorite_number = 4;
   */
  favoriteNumber = 0;

  /**
   * @generated from field: optional int64 reply_at = 5;
   */
  replyAt?: bigint;

  /**
   * @generated from field: int32 reply_number = 6;
   */
  replyNumber = 0;

  /**
   * @generated from field: string published_at = 7;
   */
  publishedAt = '';

  /**
   * @generated from field: string created_at = 8;
   */
  createdAt = '';

  /**
   * @generated from field: string updated_at = 9;
   */
  updatedAt = '';

  constructor(data?: PartialMessage<Post>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.Post';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'user', kind: 'message', T: User },
    {
      no: 4,
      name: 'favorite_number',
      kind: 'scalar',
      T: 5 /* ScalarType.INT32 */,
    },
    {
      no: 5,
      name: 'reply_at',
      kind: 'scalar',
      T: 3 /* ScalarType.INT64 */,
      opt: true,
    },
    {
      no: 6,
      name: 'reply_number',
      kind: 'scalar',
      T: 5 /* ScalarType.INT32 */,
    },
    {
      no: 7,
      name: 'published_at',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 8, name: 'created_at', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 9, name: 'updated_at', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Post {
    return new Post().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Post {
    return new Post().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Post {
    return new Post().fromJsonString(jsonString, options);
  }

  static equals(
    a: Post | PlainMessage<Post> | undefined,
    b: Post | PlainMessage<Post> | undefined
  ): boolean {
    return proto3.util.equals(Post, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.CreatePostRequest
 */
export class CreatePostRequest extends Message<CreatePostRequest> {
  /**
   * @generated from field: string text = 1;
   */
  text = '';

  /**
   * @generated from field: optional int64 reply_at = 2;
   */
  replyAt?: bigint;

  constructor(data?: PartialMessage<CreatePostRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.CreatePostRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'reply_at',
      kind: 'scalar',
      T: 3 /* ScalarType.INT64 */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreatePostRequest {
    return new CreatePostRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreatePostRequest {
    return new CreatePostRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreatePostRequest {
    return new CreatePostRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreatePostRequest | PlainMessage<CreatePostRequest> | undefined,
    b: CreatePostRequest | PlainMessage<CreatePostRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreatePostRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.CreatePostResponse
 */
export class CreatePostResponse extends Message<CreatePostResponse> {
  /**
   * @generated from field: schemas.protos.v1.Post post = 1;
   */
  post?: Post;

  constructor(data?: PartialMessage<CreatePostResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.CreatePostResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'post', kind: 'message', T: Post },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreatePostResponse {
    return new CreatePostResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreatePostResponse {
    return new CreatePostResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreatePostResponse {
    return new CreatePostResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreatePostResponse | PlainMessage<CreatePostResponse> | undefined,
    b: CreatePostResponse | PlainMessage<CreatePostResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreatePostResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.DeletePostRequest
 */
export class DeletePostRequest extends Message<DeletePostRequest> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<DeletePostRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.DeletePostRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeletePostRequest {
    return new DeletePostRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeletePostRequest {
    return new DeletePostRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeletePostRequest {
    return new DeletePostRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeletePostRequest | PlainMessage<DeletePostRequest> | undefined,
    b: DeletePostRequest | PlainMessage<DeletePostRequest> | undefined
  ): boolean {
    return proto3.util.equals(DeletePostRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.DeletePostResponse
 */
export class DeletePostResponse extends Message<DeletePostResponse> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  constructor(data?: PartialMessage<DeletePostResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.DeletePostResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeletePostResponse {
    return new DeletePostResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeletePostResponse {
    return new DeletePostResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeletePostResponse {
    return new DeletePostResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeletePostResponse | PlainMessage<DeletePostResponse> | undefined,
    b: DeletePostResponse | PlainMessage<DeletePostResponse> | undefined
  ): boolean {
    return proto3.util.equals(DeletePostResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetPostRequest
 */
export class GetPostRequest extends Message<GetPostRequest> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<GetPostRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetPostRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPostRequest {
    return new GetPostRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPostRequest {
    return new GetPostRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPostRequest {
    return new GetPostRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetPostRequest | PlainMessage<GetPostRequest> | undefined,
    b: GetPostRequest | PlainMessage<GetPostRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetPostRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetPostResponse
 */
export class GetPostResponse extends Message<GetPostResponse> {
  /**
   * @generated from field: schemas.protos.v1.Post post = 1;
   */
  post?: Post;

  constructor(data?: PartialMessage<GetPostResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetPostResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'post', kind: 'message', T: Post },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPostResponse {
    return new GetPostResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPostResponse {
    return new GetPostResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPostResponse {
    return new GetPostResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetPostResponse | PlainMessage<GetPostResponse> | undefined,
    b: GetPostResponse | PlainMessage<GetPostResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetPostResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetPostsRequest
 */
export class GetPostsRequest extends Message<GetPostsRequest> {
  /**
   * @generated from field: string scope = 1;
   */
  scope = '';

  constructor(data?: PartialMessage<GetPostsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetPostsRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'scope', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPostsRequest {
    return new GetPostsRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPostsRequest {
    return new GetPostsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPostsRequest {
    return new GetPostsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetPostsRequest | PlainMessage<GetPostsRequest> | undefined,
    b: GetPostsRequest | PlainMessage<GetPostsRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetPostsRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetPostsResponse
 */
export class GetPostsResponse extends Message<GetPostsResponse> {
  /**
   * @generated from field: repeated schemas.protos.v1.Post posts = 1;
   */
  posts: Post[] = [];

  constructor(data?: PartialMessage<GetPostsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetPostsResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'posts', kind: 'message', T: Post, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetPostsResponse {
    return new GetPostsResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetPostsResponse {
    return new GetPostsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetPostsResponse {
    return new GetPostsResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetPostsResponse | PlainMessage<GetPostsResponse> | undefined,
    b: GetPostsResponse | PlainMessage<GetPostsResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetPostsResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetRepliesRequest
 */
export class GetRepliesRequest extends Message<GetRepliesRequest> {
  /**
   * @generated from field: int64 reply_at = 1;
   */
  replyAt = protoInt64.zero;

  constructor(data?: PartialMessage<GetRepliesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetRepliesRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'reply_at', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetRepliesRequest {
    return new GetRepliesRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetRepliesRequest {
    return new GetRepliesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetRepliesRequest {
    return new GetRepliesRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetRepliesRequest | PlainMessage<GetRepliesRequest> | undefined,
    b: GetRepliesRequest | PlainMessage<GetRepliesRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetRepliesRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetRepliesResponse
 */
export class GetRepliesResponse extends Message<GetRepliesResponse> {
  /**
   * @generated from field: repeated schemas.protos.v1.Post replies = 1;
   */
  replies: Post[] = [];

  constructor(data?: PartialMessage<GetRepliesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetRepliesResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'replies', kind: 'message', T: Post, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetRepliesResponse {
    return new GetRepliesResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetRepliesResponse {
    return new GetRepliesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetRepliesResponse {
    return new GetRepliesResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetRepliesResponse | PlainMessage<GetRepliesResponse> | undefined,
    b: GetRepliesResponse | PlainMessage<GetRepliesResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetRepliesResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.CreateFavoriteRequest
 */
export class CreateFavoriteRequest extends Message<CreateFavoriteRequest> {
  /**
   * @generated from field: int64 favorite_at = 1;
   */
  favoriteAt = protoInt64.zero;

  constructor(data?: PartialMessage<CreateFavoriteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.CreateFavoriteRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'favorite_at', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateFavoriteRequest {
    return new CreateFavoriteRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateFavoriteRequest {
    return new CreateFavoriteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateFavoriteRequest {
    return new CreateFavoriteRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateFavoriteRequest | PlainMessage<CreateFavoriteRequest> | undefined,
    b: CreateFavoriteRequest | PlainMessage<CreateFavoriteRequest> | undefined
  ): boolean {
    return proto3.util.equals(CreateFavoriteRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.CreateFavoriteResponse
 */
export class CreateFavoriteResponse extends Message<CreateFavoriteResponse> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  constructor(data?: PartialMessage<CreateFavoriteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.CreateFavoriteResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateFavoriteResponse {
    return new CreateFavoriteResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateFavoriteResponse {
    return new CreateFavoriteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateFavoriteResponse {
    return new CreateFavoriteResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | CreateFavoriteResponse
      | PlainMessage<CreateFavoriteResponse>
      | undefined,
    b: CreateFavoriteResponse | PlainMessage<CreateFavoriteResponse> | undefined
  ): boolean {
    return proto3.util.equals(CreateFavoriteResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetFavoriteRequest
 */
export class GetFavoriteRequest extends Message<GetFavoriteRequest> {
  /**
   * @generated from field: int64 post_id = 1;
   */
  postId = protoInt64.zero;

  constructor(data?: PartialMessage<GetFavoriteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetFavoriteRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'post_id', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFavoriteRequest {
    return new GetFavoriteRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFavoriteRequest {
    return new GetFavoriteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFavoriteRequest {
    return new GetFavoriteRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFavoriteRequest | PlainMessage<GetFavoriteRequest> | undefined,
    b: GetFavoriteRequest | PlainMessage<GetFavoriteRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetFavoriteRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.GetFavoriteResponse
 */
export class GetFavoriteResponse extends Message<GetFavoriteResponse> {
  /**
   * @generated from field: repeated schemas.protos.v1.User users = 1;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<GetFavoriteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.GetFavoriteResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'users', kind: 'message', T: User, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFavoriteResponse {
    return new GetFavoriteResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFavoriteResponse {
    return new GetFavoriteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFavoriteResponse {
    return new GetFavoriteResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFavoriteResponse | PlainMessage<GetFavoriteResponse> | undefined,
    b: GetFavoriteResponse | PlainMessage<GetFavoriteResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetFavoriteResponse, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.DeleteFavoriteRequest
 */
export class DeleteFavoriteRequest extends Message<DeleteFavoriteRequest> {
  /**
   * @generated from field: int64 favorite_at = 1;
   */
  favoriteAt = protoInt64.zero;

  constructor(data?: PartialMessage<DeleteFavoriteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.DeleteFavoriteRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'favorite_at', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteFavoriteRequest {
    return new DeleteFavoriteRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteFavoriteRequest {
    return new DeleteFavoriteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteFavoriteRequest {
    return new DeleteFavoriteRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeleteFavoriteRequest | PlainMessage<DeleteFavoriteRequest> | undefined,
    b: DeleteFavoriteRequest | PlainMessage<DeleteFavoriteRequest> | undefined
  ): boolean {
    return proto3.util.equals(DeleteFavoriteRequest, a, b);
  }
}

/**
 * @generated from message schemas.protos.v1.DeleteFavoriteResponse
 */
export class DeleteFavoriteResponse extends Message<DeleteFavoriteResponse> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  constructor(data?: PartialMessage<DeleteFavoriteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'schemas.protos.v1.DeleteFavoriteResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteFavoriteResponse {
    return new DeleteFavoriteResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteFavoriteResponse {
    return new DeleteFavoriteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteFavoriteResponse {
    return new DeleteFavoriteResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | DeleteFavoriteResponse
      | PlainMessage<DeleteFavoriteResponse>
      | undefined,
    b: DeleteFavoriteResponse | PlainMessage<DeleteFavoriteResponse> | undefined
  ): boolean {
    return proto3.util.equals(DeleteFavoriteResponse, a, b);
  }
}
