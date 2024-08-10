import axios from "axios";

export const fetchUser = async (id: number) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
