import axios from "axios";

export const getUserByIdAPI = (id) => {
  return axios.get(`http://localhost:4000/api/auth/${id}`);
};