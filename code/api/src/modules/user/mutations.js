// Imports
import { GraphQLString, GraphQLInt } from "graphql";

// App Imports
import { UserType } from "./types";
import { create, remove, update } from "./resolvers";

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: "name",
      type: GraphQLString,
    },

    email: {
      name: "email",
      type: GraphQLString,
    },

    password: {
      name: "password",
      type: GraphQLString,
    },
  },
  resolve: create,
};

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
};

// Profile Edit
export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    name: {
      name: "name",
      type: GraphQLString,
    },
    address: {
      name: "address",
      type: GraphQLString,
    },
  },
  resolve: update,
};
