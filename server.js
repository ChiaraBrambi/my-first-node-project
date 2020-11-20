//servere file
console.log("node is running");
//we will create a local lost by the instruction on our compute
//pakege node express
let express = require("express");//loded all the code inside a variable
let socket = require("socket.io");
let app = express();
let port = 3000;
let server = app.listen(port);
app.use(express.static('pablic'));
//create web socket : client and server discussion, this in comand prompt

//io = input-output
let io = socket(server);
io.on("connection", newConnection);//name of the function that have to be executed

function newConnection(socket){
  console.log("new connection:" + socket.client.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(dataRecived){
    console.log(socket.client.id, dataRecived);
    socket.broadcast.emit("mouseBroadcast", dataRecived);
  }
}

unction getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
