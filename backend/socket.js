const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  // Socket.io connection
  io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("A client disconnected:", socket.id);
    });
  });
};

module.exports = {
  initializeSocket,
};
