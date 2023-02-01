const io=require('socket.io')(8001)
// let cors = require("cors");
// io.use(cors());

// io.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//   next(); 
// })
const users = {};

// socket io instance to listen to multiple socket connections
io.on("connection", (socket) => {
  // console.log('called');
  // for a particular connection(accepts an event)
  socket.on("new-user-joined", (name) => {
    console.log('new user',name)
    // assigning key to each newly joined user
    users[socket.id] = name;
    //broadcasts to other users whenever a new user joins
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: user[socket.id],
    });
  });
});
