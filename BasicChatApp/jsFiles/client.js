const socket = io("http://localhost:3000", {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const form = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.querySelector(".container");
let audio = new Audio("../Images/pingTune.mp3");

socket.on("chat-message", (data) => {
  console.log(data);
});

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
  if (position == "left") audio.play();
};
// socket.emit("new-user-joined", name);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});

const name = prompt("Enter Your name to join");

socket.emit("new-user-joined", name);

socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");

  console.log(data);
});

socket.on("left", (name) => {
  append(`${name} left chat`, "left");

  console.log(data);
});
