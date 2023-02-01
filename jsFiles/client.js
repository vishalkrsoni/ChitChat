const socket = io("http://localhost:8001");

const form = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.querySelector(".container");

const name = prompt("Enter Your name to join");

socket.emit("new-user-joined", name);
