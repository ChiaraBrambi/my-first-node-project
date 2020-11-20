let socket = io();
let myColor = 'white';

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

function newConnection(){
  console.log("your id"+ socket.id);
}

function setColor(assignedColor){
  myColor = assignedColor;
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
  push();
  fill('orange');
  noStroke();
  ellipse(mouseX, mouseY,20);
  pop();
  //create the message
  let message ={
    x: mouseX,
    y: mouseY,
  };
  //send to the server
  socket.emit("mouse", message);
}
