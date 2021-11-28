//Player Variables
let charX = 200;
let charY = 50;
let orbSize = 0;
let onClicked = 0;
let mousex = 0;
let mousey = 0;
//keyboard bindings
let w = 87;
let s = 83;
let a = 65;
let d = 68;
//obstacle 1
let obs1X = -20;
let obs1Y = 100;
let obs1W = 40;
//obstacle 2
let obs2X = 400;
let obs2Y = 300;
let obs2W = 40;s




function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background(204,255,255);
  drawChar();
  drawBorder();
  drawObs1();
  drawObs2();
  
}

//Game border
function drawBorder(){
  fill(0)
  rect(0,0,400,10);
  rect(0,0,10,600);
  rect(390,0,10,600);
  rect(0,590,170,10);
  rect(230,590,170,10);
  fill(255,188,0);
  rect(170,590,60,10);
  //border loop
  borderWall();
}

//Character definition
function drawChar() {
  noStroke();
  fill(94,82,255);
  circle(charX,charY,30);
  moveChar();  
}

  //Character movement
function moveChar() {
  if(keyIsDown(w)){
    charY -= 5;
  }
  if(keyIsDown(s)){
    charY += 5;
  }
  if(keyIsDown(a)){
    charX -= 5;
  }
  if(keyIsDown(d)){
    charX += 5;
  }
  if(onClicked > 0){
    fill("Yellow");
    circle(mousex,mousey,orbSize);
    orbGrow();
  }
}

function mousePressed(){
  onClicked += 1;
  orbSize = 0;
  mousex = mouseX;
  mousey = mouseY;
}

function orbGrow(){
  if  (orbSize <= 100){
    orbSize += 2;
  }
}

//Border Collision
function borderWall(){
  if (charY <= 500 || (charX >= 230 || charX <= 170)){
    if (charX <= 25){
      charX = 25;
    }
    if (charX >= 375){
      charX = 375;
    }
    if (charY >= 575){
      charY = 575;
    }
    if (charY <= 25){
      charY = 25;
    }
  }
  if (charY >= 600 && (charX <= 230 || charX >= 170)){
    winCon();
  }
}

//Win condition
function winCon(){
  fill(0);
  textSize(48);
  text("You Win!",100,300);
  print("Win Condition Met.");
}

//Obstacle Definitions
function drawObs1(){
  fill(19,117,39);
  rect(obs1X,obs1Y,obs1W,20);
  obsMove1();
}
function drawObs2(){
  fill(233,101,20);
  rect(obs2X,obs2Y,obs2W,20);
  obsMove2();
}
function obsMove1(){
  obs1X += 5;
  if (obs1X >= 400){
    obs1X = -40;
    obs1Y = random(100,500);
  }
}
function obsMove2(){
  obs2X -= 5;
  if (obs2X <= -40){
    obs2X = 400;
    obs2Y = random(100,500);
  }
}

