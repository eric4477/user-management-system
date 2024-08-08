import axios from "axios";
export const fetchAllUsers = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
  } catch (error) {
    throw error;
  }
};
