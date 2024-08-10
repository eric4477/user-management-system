import axios from "axios";

import { toast } from "react-toastify";
export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/users/${id}`);
    toast.success("User deleted successfully");
    return response.data;
  } catch (error) {
    throw error;
  }
};
