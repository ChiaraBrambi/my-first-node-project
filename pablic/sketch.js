let socket = io();
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection(){
  console.log("your id"+ socket.id);
}

function drawOtherMouse(data){
  fill('pink');
  noStroke();
  ellipse(data.x, data.y,20);
}

function preload(){}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('purple');}

function draw() {}

//connettersi a localhost:3000 per vedere. lo sketch scrivendo node.js nel prompt comandi
function mouseMoved(){
  fill('orange');
  noStroke();
  ellipse(mouseX, mouseY,20);
  //create the message
  let message ={
    x: mouseX,
    y: mouseY,
  };
  //send to the server
  socket.emit("mouse", message);
}
