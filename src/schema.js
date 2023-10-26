import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query{
        hello: String
        users(id: Int): User
    }

    type User{
        _id: String!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }

    input UserInput{
        _id: String!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }
     
    type Mutation {
        createUser(input: UserInput): User
    }

`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
