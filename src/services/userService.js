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
    const resTrujillo = await fetch(`http://localhost:4000/iduser/${id}`); // Microservicio Trujillo
    const resOspitia = await fetch(`http://localhost:3333/api/user/${id}`); // Microservicio Ospitia

    const dataTrujillo = await resTrujillo.json();
    const dataOspitia = await resOspitia.json();

    console.log("os",dataOspitia)
    console.log("tr",dataTrujillo)
    return { dataTrujillo, dataOspitia };
  } catch (err) {
    throw err;
  }
};
