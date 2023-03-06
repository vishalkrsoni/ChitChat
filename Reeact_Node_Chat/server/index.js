const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const port = 8080;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${port}`,
    methods: ["GET", "POST"],
  },
});

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});
