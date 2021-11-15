//Player var
let px = 200;
let py = 50;
let onClicked = 0;
let mousex = 0;
let mousey = 0;
//Mob1 var
let m1x = -90;
let m1y = 100;
//Mob2 var
let m2x = 100;
let m2y = 30;
let m2xmove = 6;
let m2ymove = 6;
//Mob3 var
let m3x = 300;
let m3y = 120;
let m3xmove = 6;
let m3ymove = 6;


function setup() {
  createCanvas(400, 800);

}

function draw() {
  background(184,249,180);
  noStroke();
// Finish
  fill('Green');
  rect(0,780,400,20);
  fill('White');
  textSize(20);
  text("Finish",175,800);
  if (py >= 780){
    fill('Gold');
    textSize(48);
    text("Winner",120,400);
  }
//Player
  fill('Green');
  textSize(20);
  text("W,A,S,D to Move", 120, 20);
  fill('Yellow');
  circle(px,py,20);
  if(keyIsDown(87)){
    py -= 3;
  }
  if(keyIsDown(65)){
    px -= 3;
  }
  if(keyIsDown(83)){
    py += 3;
  }
  if(keyIsDown(68)){
    px += 3;
  }
  if (onClicked > 0) {
    print(mousex,mousey);
    fill('Blue');
    square(mousex,mousey, 55);
  }
  
// Mob 1
  fill('Red');
  rect(m1x,m1y,90,20);
  if (m1x<=400){
    m1x += 4;
  }
  else{
    m1x = -90;
    m1y = random(100,700);
  }
// Mob 2
  if (py > 200){
    stroke(255,205,0);
    strokeWeight(48);
    point(m2x,m2y);
    m2x += m2xmove;
    m2y += m2ymove;
    if (m2x + 30 >= 400 || m2x <= 0){
      m2xmove *= -1;
    }
    if (m2y + 30 >= 800 || m2y <= 0){
      m2ymove *= -1;
    }
  }
// Mob 3
    if (py > 400){
    stroke(162,0,255);
    strokeWeight(48);
    point(m3x,m3y);
    m3x += m3xmove;
    m3y += m3ymove;
    if (m3x + 30 >= 400 || m3x <= 0){
      m3xmove *= -1;
    }
    if (m3y + 30 >= 800 || m3y <= 0){
      m3ymove *= -1;
    }
  }

}
function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
    onClicked += 1;
}