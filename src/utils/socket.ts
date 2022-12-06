import socketIo from "socket.io-client";

export const socket = socketIo("http://localhost:3001", {
  transports: ["websocket"],
});
