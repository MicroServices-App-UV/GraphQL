import { getUser, sendID, updateUserInAuth } from "./services/userService.js";
export const resolvers = {
  Query: {
    sendID: async (root, { id }) => {
      var res = await sendID(id);
      return res;
    },
    // Desc: get user by id.
    users: async (root, { id }) => {
      var user = await getUser(id);
      return user;
    },
  },
  Mutation: {
    async updateUser(_, { input }) {
      var res = await updateUserInAuth(input);
      return res;
    },
  },
};
