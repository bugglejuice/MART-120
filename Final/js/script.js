let pdia = 30;
let playerX = 200;
let playerY = 800;
let projectileX = 0;
let projectileY = 0;
let onClicked = 0;
let score = 0;
//mob variables
let mob1x = -30;
let mob1y = 0;
let mob1w = 30;
let mob2x = 430;
let mob2y = 100;
let mob2w = 30;
let mob3x = 50;
let mob3y = -100;
let mob3w = 30;
let mob4x = 100;
let mob4y = -200;
let mob4w = 30;
let mob5x = 50;
let mob5y = -30;
let mob5w = 30;
function setup() {
  createCanvas(400,800);
}

function draw() {
  background(0);
  player();
  shot();
  mob1();
  mob2();
  mob3();
  mob4();
  mob5();
  textSize(32);
  fill('orange');
  text('Score:',5,35);
  text(score,100,35);
}
function player(){
  noStroke();
  fill('blue');
  circle(playerX, playerY,pdia);
  moveChar();
  stroke('red');
  line(playerX,playerY,mouseX,mouseY);
}

  //Character movement
function moveChar() {
  if(keyIsDown(65)){
    playerX -= 5;
  }
  if(keyIsDown(68)){
    playerX += 5;
  }
  if (playerX <= 15){
    playerX = 15;
  }
  if (playerX >= 385){
    playerX = 385;
  }
  if (playerY >= 785){
    playerY = 785;
  }
  if (playerY <= 15){
    playerY = 15;
  }
}

function shot(){
  if(onClicked > 0){
    projectileX = mouseX;
    projectileY = mouseY;
    fill('red');
    circle(projectileX,projectileY,20);
    onClicked = 0;
  }
}

function mousePressed(){
  onClicked += 1;
  if ((mob1x - mouseX <= 20 && mob1y - mouseY <= 20) && (mob1x - mouseX >= -20 && mob1y - mouseY >= -20) && onClicked > 0){
    score += 1;
    mob1w = 0;
  }
  if ((mob2x - mouseX <= 20 && mob2y - mouseY <= 20) && (mob2x - mouseX >= -20 && mob2y - mouseY >= -20) && onClicked > 0){
    score += 1;
    mob2w = 0;
  }
  if ((mob3x - mouseX <= 20 && mob3y - mouseY <= 20) && (mob3x - mouseX >= -20 && mob3y - mouseY >= -20) && onClicked > 0){
    score += 1;
    mob3w = 0;
  }
  if ((mob4x - mouseX <= 20 && mob4y - mouseY <= 20) && (mob4x - mouseX >= -20 && mob4y - mouseY >= -20) && onClicked > 0){
    score += 1;
    mob4w = 0;
  }
  if ((mob5x - mouseX <= 20 && mob5y - mouseY <= 20) && (mob5x - mouseX >= -20 && mob5y - mouseY >= -20) && onClicked > 0){
    score += 1;
    mob5w = 0;
  }
}
function mob1(){
  noStroke();
  fill('green');
  rect(mob1x, mob1y, mob1w,30);
  if (mob1y < 830){
    mob1x += .75;
    mob1y += 3;
  }
  else{
    mob1x = -30;
    mob1y = 0;
  }
  if (mob1y > 830){
    mob1w = 30;
  }
  if ((mob1y >= 800 && mob1y <= 802) && mob1w != 0){
    score -= 1;
  }
  }
function mob2(){
  noStroke();
  fill('pink');
  rect(mob2x, mob2y, mob2w,30);
  if (mob2y < 830){
    mob2x -= 0.75;
    mob2y += 3;
  }
  else{
    mob2x = 430;
    mob2y = 100;
  }
  if (mob2y > 830){
    mob2w = 30;
  }
  if ((mob2y >= 800 && mob2y <= 802) && mob2w != 0){
    score -= 1;
  }
  }
function mob3(){
  noStroke();
  fill('orange');
  rect(mob3x, mob3y, mob3w,30);
  if (mob3y < 830){
    mob3x -= 0.25;
    mob3y += 3;
  }
  else{
    mob3x = 50;
    mob3y = -100;
  }
  if (mob3y > 830){
    mob3w = 30;
  }
  if ((mob3y >= 800 && mob3y <= 802) && mob3w != 0){
    score -= 1;
  }
  }
function mob4(){
  noStroke();
  fill('purple');
  rect(mob4x, mob4y, mob4w,30);
  if (mob4y < 830){
    mob4x -= 0.15;
    mob4y += 3;
  }
  else{
    mob4x = 100;
    mob4y = -200;
  }
  if (mob4y > 830){
    mob4w = 30;
  }
  if ((mob4y >= 800 && mob4y <= 802) && mob4w != 0){
    score -= 1;
  }
  }
function mob5(){
  noStroke();
  fill('yellow');
  rect(mob5x, mob5y, mob5w,30);
  if (mob5y < 830){
    mob5y += 3;
  }
  else{
    mob5x = 50;
    mob5y = -30;
  }
  if (mob5y > 830){
    mob5w = 30;
  }
  if ((mob5y >= 800 && mob5y <= 802) && mob5w != 0){
    score -= 1;
  }
  }
