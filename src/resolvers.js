import { users } from "./sample.js";
import { addUser } from "./services/userService.js";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with GraphQL";
    },
    users: (root, { id }) => {
      return users[id - 1];
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      await addUser(input);
      return input;
    },
  },
};

// query{
//   users(id: 2){
//          _id
//         firstName
//         lastName
//         username
//         email
//   }
// }
