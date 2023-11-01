import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query{
        sendID(id: String): String
        users(id: String): User
    }
    
    type User{
        _id: String!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }

    type Meal {
        product_id: String!
        user_id: String!
        name: String!
        count: Int!
        price: Int!
    }

    input UserInput{
        _id: String!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }
     
    input mealInput {
        product_id: String!
        user_id: String!
        name: String!
        count: Int!
        price: Int!
    }

    type Mutation {
        updateUser(input: UserInput): User
        sendMeal(input: mealInput): Meal
    }

`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
