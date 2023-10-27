import User from "../models/User.js";

export const addUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId) => {
  console.log("He entrau jijijij");
  try {
    const user = await User.find({ _id: userId });
    return user[0];
  } catch (err) {
    throw err;
  }
};
