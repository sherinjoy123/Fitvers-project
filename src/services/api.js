import axios from "axios";
import { API_URL } from "./config";

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((req) => {
  if (req.headers.Authorization) {
    return req;
  }

  const token =
    localStorage.getItem("token") || localStorage.getItem("trainerToken");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
