import { users } from "./sample.js";
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
    createUser() {
      var newUser = {
        _id: "3",
        firstName: "Sant",
        lastName: "Trujillo",
        username: "quierocarne",
        email: "quierocarne69@gmail.com",
      };
      users.push(newUser);
      return newUser;
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
