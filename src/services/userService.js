import User from "../models/User.js";

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
    const resTrujillo = await fetch(`http://localhost:5000/iduser/${id}`); // Microservicio Trujillo
    // const resOspitia = await fetch(`http://localhost:3333/api/user/${id}`); // Microservicio Ospitia

    const dataTrujillo = await resTrujillo.json();
    // const dataOspitia = await resOspitia.json();

    // console.log("os", dataOspitia);
    console.log("tr", dataTrujillo);
    return dataTrujillo.idd;
  } catch (err) {
    throw err;
  }
};

export const updateUserInAuth = async (userData) => {
  try {
    const data = await JSON.stringify(userData);
    const id = userData._id;
    const response = await fetch(`http://localhost:4000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const updatedUserData = await response.json();
    return updatedUserData;
  } catch (error) {
    throw error;
  }
};

export const sendMealResolver = async (meal) => {
  console.log(meal);
};
