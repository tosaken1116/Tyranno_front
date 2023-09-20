// @generated by protoc-gen-connect-query v0.4.1 with parameter "target=ts,import_extension=none"
// @generated from file schemas/protos/v1/user.proto (package schemas.protos.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { CheckDisplayNameRequest, CheckDisplayNameResponse, CreateUserRequest, CreateUserResponse, DeleteUserResponse, FollowUserRequest, FollowUserResponse, GetUserRequest, GetUserResponse, GetUsersResponse, UnfollowUserRequest, UnfollowUserResponse, UpdateUserRequest, UpdateUserResponse } from "./user_pb";

export const typeName = "schemas.protos.v1.UserService";

/**
 * @generated from rpc schemas.protos.v1.UserService.CreateUser
 */
export const createUser = createQueryService({
  service: {
    methods: {
      createUser: {
        name: "CreateUser",
        kind: MethodKind.Unary,
        I: CreateUserRequest,
        O: CreateUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).createUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.UpdateUser
 */
export const updateUser = createQueryService({
  service: {
    methods: {
      updateUser: {
        name: "UpdateUser",
        kind: MethodKind.Unary,
        I: UpdateUserRequest,
        O: UpdateUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).updateUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.DeleteUser
 */
export const deleteUser = createQueryService({
  service: {
    methods: {
      deleteUser: {
        name: "DeleteUser",
        kind: MethodKind.Unary,
        I: Empty,
        O: DeleteUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).deleteUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetMe
 */
export const getMe = createQueryService({
  service: {
    methods: {
      getMe: {
        name: "GetMe",
        kind: MethodKind.Unary,
        I: Empty,
        O: GetUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getMe;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetUser
 */
export const getUser = createQueryService({
  service: {
    methods: {
      getUser: {
        name: "GetUser",
        kind: MethodKind.Unary,
        I: GetUserRequest,
        O: GetUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetUsers
 */
export const getUsers = createQueryService({
  service: {
    methods: {
      getUsers: {
        name: "GetUsers",
        kind: MethodKind.Unary,
        I: Empty,
        O: GetUsersResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getUsers;

/**
 * @generated from rpc schemas.protos.v1.UserService.CheckDisplayName
 */
export const checkDisplayName = createQueryService({
  service: {
    methods: {
      checkDisplayName: {
        name: "CheckDisplayName",
        kind: MethodKind.Unary,
        I: CheckDisplayNameRequest,
        O: CheckDisplayNameResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).checkDisplayName;

/**
 * @generated from rpc schemas.protos.v1.UserService.FollowUser
 */
export const followUser = createQueryService({
  service: {
    methods: {
      followUser: {
        name: "FollowUser",
        kind: MethodKind.Unary,
        I: FollowUserRequest,
        O: FollowUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).followUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.UnfollowUser
 */
export const unfollowUser = createQueryService({
  service: {
    methods: {
      unfollowUser: {
        name: "UnfollowUser",
        kind: MethodKind.Unary,
        I: UnfollowUserRequest,
        O: UnfollowUserResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).unfollowUser;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetFollowByID
 */
export const getFollowByID = createQueryService({
  service: {
    methods: {
      getFollowByID: {
        name: "GetFollowByID",
        kind: MethodKind.Unary,
        I: GetUserRequest,
        O: GetUsersResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getFollowByID;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetFollowerByID
 */
export const getFollowerByID = createQueryService({
  service: {
    methods: {
      getFollowerByID: {
        name: "GetFollowerByID",
        kind: MethodKind.Unary,
        I: GetUserRequest,
        O: GetUsersResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getFollowerByID;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetMyFollow
 */
export const getMyFollow = createQueryService({
  service: {
    methods: {
      getMyFollow: {
        name: "GetMyFollow",
        kind: MethodKind.Unary,
        I: Empty,
        O: GetUsersResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getMyFollow;

/**
 * @generated from rpc schemas.protos.v1.UserService.GetMyFollower
 */
export const getMyFollower = createQueryService({
  service: {
    methods: {
      getMyFollower: {
        name: "GetMyFollower",
        kind: MethodKind.Unary,
        I: Empty,
        O: GetUsersResponse,
      },
    },
    typeName: "schemas.protos.v1.UserService",
  },
}).getMyFollower;
