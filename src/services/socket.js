import { io } from "socket.io-client";
import { SOCKET_URL } from "./config";

let socket;

export const getSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL);
  }
  return socket;
};

export default getSocket;
