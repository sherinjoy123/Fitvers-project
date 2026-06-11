import API from "./api";
import trainerClient from "./trainerApi";

const getClientForSender = (senderId) => {
  const trainer = JSON.parse(localStorage.getItem("trainer") || "null");

  if (trainer?._id && trainer._id.toString() === senderId?.toString()) {
    return trainerClient;
  }

  return API;
};

export const getMessagesAPI = (senderId, receiverId) => {
  return getClientForSender(senderId).get(
    `/api/messages/${senderId}/${receiverId}`
  );
};

export const saveMessageAPI = (data) => {
  return getClientForSender(data.senderId).post(
    "/api/messages/save-message",
    data
  );
};
