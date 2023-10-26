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
