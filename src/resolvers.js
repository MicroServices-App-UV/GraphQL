import { addUser, getUser, sendID } from "./services/userService.js";
export const resolvers = {
  Query: {
    sendID: async (root, { id }) => {
      var res = await sendID(id);
      return res;
    },
    users: async (root, { id }) => {
      var user = await getUser(id);
      return user;
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
