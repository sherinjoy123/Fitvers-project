import axios from "axios";

export const getMessagesAPI = (senderId, receiverId) => {
  return axios.get(
    `http://localhost:4000/api/messages/${senderId}/${receiverId}`
  );
};

export const saveMessageAPI = (data) => {
    return axios.post(
      "http://localhost:4000/api/messages/save-message",
      data
    );
  };