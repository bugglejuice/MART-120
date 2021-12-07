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

//Obstacles
let obsX = [-20,100,200,300,400];
let obsY = [100,200,300,400,500];
let obsW = [20,40,20,10,20];
let obsColor =['Red','Orange','Green','Cyan','Black'];

function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background('LightGrey');
  drawChar();
  drawBorder();
  drawObs1();
  drawObs2();
  drawObs3();
  drawObs4();
  drawObs5();
  
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
    orbMove();
  }
}

function mousePressed(){
  onClicked += 1;
  orbSize = 20;
  mousex = mouseX;
  mousey = mouseY;
}

function orbMove(){
  if  (mousey <= charY){
    mousey -= 5;
    if (mousey < 0){
      mousey == -20;
    }
  }
  else if (mousey >= charY){
    mousey += 5;
    if (mousey > 600){
      mousey == 620;
    }
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
  //Obstacle 1
function drawObs1(){

  fill(obsColor[0]);
  rect(obsX[0],obsY[0],obsW[0],20);
  obsMove1();
}
function obsMove1(){
  obsX[0] += 5;
  if (obsX[0] >= 400){
    obsX[0] = -40;
    obsY[0] = random(100,500);
  }
}
  //Obstacle 2
function drawObs2(){
  fill(obsColor[1]);
  rect(obsX[1],obsY[1],obsW[1],20);
  obsMove2();
}
function obsMove2(){
  obsX[1] -= 5;
  if (obsX[1] <= -40){
    obsX[1] = 400;
    obsY[1] = random(100,500);
  }
}
  //Obstacle 3
function drawObs3(){
  fill(obsColor[2]);
  rect(obsX[2],obsY[2],obsW[2],40);
  obsMove3();
}
function obsMove3(){
  obsY[2] -= 5;
  if (obsY[2] <= -40){
    obsY[2] = 600;
    obsX[2] = random(10,390);
  }
}
  //Obstacle 4
function drawObs4(){
  fill(obsColor[3]);
  rect(obsX[3],obsY[3],obsW[3],40);
  obsMove4();
}
function obsMove4(){
  obsY[3] -= 5;
  if (obsY[3] <= -40){
    obsY[3] = 600;
    obsX[3] = random(10,390);
  }
}
  //Obstacle 5
function drawObs5(){
  fill(obsColor[4]);
  rect(obsX[4],obsY[4],obsW[4],40);
  obsMove5();
}
function obsMove5(){
  obsY[4] -= 5;
  if (obsY[4] <= -40){
    obsY[4] = 600;
    obsX[4] = random(10,390);
  }
}





