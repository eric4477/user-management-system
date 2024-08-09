import axios from "axios";
import { toast } from "react-toastify";
export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/users/${id}`);
    const firstName = response.data.firstName;
    const lastName = response.data.lastName;
    toast.success(`deleted ${firstName}  ${lastName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
