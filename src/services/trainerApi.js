import axios from "axios";
import { API_URL } from "./config";
import API from "./api";
import adminAPI from "./adminApi";

export const trainerClient = axios.create({
  baseURL: API_URL,
});

trainerClient.interceptors.request.use((req) => {
  const token = localStorage.getItem("trainerToken");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const createTrainerAPI = async (reqBody, reqHeader) => {
  return await adminAPI.post("/api/trainers/create-trainer", reqBody, reqHeader);
};

export const TrainerLoginAPI = async (reqBody) => {
  return await API.post("/api/trainers/login", reqBody);
};

export const getTrainerAPI = async () => {
  return await API.get("/api/trainers/get-trainer");
};

export const updateTrainerAPI = async (id, reqBody, reqHeader) => {
  return await adminAPI.put(`/api/trainers/update/${id}`, reqBody, reqHeader);
};

export const deleteTrainerAPI = async (id, reqHeader) => {
  return await adminAPI.delete(`/api/trainers/delete/${id}`, reqHeader);
};

export const getTrainerBookingsAPI = async () => {
  return await trainerClient.get("/api/trainers/get-booking");
};

export default trainerClient;
