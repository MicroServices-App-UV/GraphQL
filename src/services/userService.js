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
  try {
    const user = await fetch(`http://localhost:4000/user/${userId}`);
    return user.json();
  } catch (err) {
    throw err;
  }
};

export const sendID = async (id) => {
  try {
    //const res = await fetch(`http://localhost:4000/iduser/${id}`); // Microservicio Trujillo
    const resMenu = await fetch(`http://localhost:3333/api/user/${id}`); //Microservicio Ospitia
    return resMenu.json();
  } catch (err) {
    throw err;
  }
};
