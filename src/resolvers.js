import { addUser, getUser, sendID, updateUserInAuth } from "./services/userService.js";
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
    async updateUser(_, { input }) {
      console.log("input",input)
      var res = await updateUserInAuth(input)
      return res;
    }
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
