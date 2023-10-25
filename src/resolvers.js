import { tasks } from "./sample.js";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with GraphQL";
    },
  },
  Mutation: {
    createUser(_, { input }) {
      return input;
    },
  },
};
