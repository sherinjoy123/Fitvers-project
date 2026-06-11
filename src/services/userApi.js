import API from "./api";

export const getUserByIdAPI = (id) => {
  return API.get(`/api/auth/${id}`);
};
