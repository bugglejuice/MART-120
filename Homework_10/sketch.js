var x = 200;
var y = 200;
var diameter = 75;
var x1 = 200;
var y1 = 200;
var diameter1 = 75;
var xmove = 10;
var ymove = 10;
const fillColor = [
  "white",
  "yellow",
  "teal",
  ];
const fillColor1 = [
  "white",
  "yellow",
  "teal",
  ];
var i = 0;
var colors = fillColor[i];
var i1 = 0
var colors1 = fillColor1[i1]
var px = 0
var py = 0
var pxmove = 10;
var pymove = 10;
var count = 0;
var size = 48;
var sizeInc = 2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
// Moving shapes
  // X axis
  fill(colors);
  noStroke();
  circle(x,y,diameter);
  circle(x-50,y, diameter-50);
  circle(x-75,y, diameter-50);
  circle(x-100,y, diameter-50);
  circle(x-125,y, diameter-50);
  circle(x-150,y, diameter-50);
  circle(x-175,y, diameter-50);
  circle(x-200,y, diameter-50);
  circle(x-225,y, diameter-50);
  circle(x-250,y, diameter-50);
  circle(x-275,y, diameter-50);
  circle(x-300,y, diameter-50);
  circle(x-325,y, diameter-50);
  circle(x-350,y, diameter-50);
  circle(x-375,y, diameter-50);
  circle(x-400,y, diameter-50);
  circle(x-425,y, diameter-50);
  circle(x+50,y, diameter-50);
  circle(x+75,y, diameter-50);
  circle(x+100,y, diameter-50);
  circle(x+125,y, diameter-50);
  circle(x+150,y, diameter-50);
  circle(x+175,y, diameter-50);
  circle(x+200,y, diameter-50);
  circle(x+225,y, diameter-50);
  circle(x+250,y, diameter-50);
  circle(x+275,y, diameter-50);
  circle(x+300,y, diameter-50);
  circle(x+325,y, diameter-50);
  circle(x+350,y, diameter-50);
  circle(x+375,y, diameter-50);
  circle(x+400,y, diameter-50);
  circle(x+425,y, diameter-50);
  if(x >= 400 || x <= 0)
  {
    xmove *= -1;
    if (x == 400 || x == 0)
    {
    if (x == 0)
    {
      xmove = random(10)
    }
    else
    {
      xmove = random(-10)
    }
    colors = fillColor[i++];
      if (i > 2)
      {
        i = 0;
      }
    }
  }
  x += xmove;
  //Y Axis
  fill(colors1);
  noStroke();
  circle(x1,y1,diameter1);
  circle(x1,y1-50,diameter1-50);
  circle(x1,y1-75,diameter1-50);
  circle(x1,y1-100,diameter1-50);
  circle(x1,y1-125,diameter1-50);
  circle(x1,y1-150,diameter1-50);
  circle(x1,y1-175,diameter1-50);
  circle(x1,y1-200,diameter1-50);
  circle(x1,y1-225,diameter1-50);
  circle(x1,y1-250,diameter1-50);
  circle(x1,y1-275,diameter1-50);
  circle(x1,y1-300,diameter1-50);
  circle(x1,y1-325,diameter1-50);
  circle(x1,y1-350,diameter1-50);
  circle(x1,y1-375,diameter1-50);
  circle(x1,y1-400,diameter1-50);
  circle(x1,y1-425,diameter1-50);
  circle(x1,y1+50,diameter1-50);
  circle(x1,y1+75,diameter1-50);
  circle(x1,y1+100,diameter1-50);
  circle(x1,y1+125,diameter1-50);
  circle(x1,y1+150,diameter1-50);
  circle(x1,y1+175,diameter1-50);
  circle(x1,y1+200,diameter1-50);
  circle(x1,y1+225,diameter1-50);
  circle(x1,y1+250,diameter1-50);
  circle(x1,y1+275,diameter1-50);
  circle(x1,y1+300,diameter1-50);
  circle(x1,y1+325,diameter1-50);
  circle(x1,y1+350,diameter1-50);
  circle(x1,y1+375,diameter1-50);
  circle(x1,y1+400,diameter1-50);
  circle(x1,y1+425,diameter1-50);
  if(y1 >= 400 || y1 <= 0)
  {
    ymove *= -1;
    if (y1 == 400 || y1 == 0)
    {
    if (y1 == 0)
    {
      ymove = random(5,11)
    }
    else
    {
      ymove = random(-5,-11)
    }
    colors1 = fillColor1[i1++]
      if (i1 > 2)
      {
        i1 = 0;
      }
    }
  }
  y1 += ymove;
//Diagonal
  fill("black");
  stroke(51);
  strokeWeight(50);
  point(px,py)
  px += pxmove;
  py += pymove;
  if(px >= 400 || px <= 0)
  {
    pxmove *=-1;
    pymove *=-1;
  }
// Portrait
  let c = color(253,226,226);
  // Head
  noStroke();
  fill(c); 
  circle(200,200,120);
  //R.Ear
  ellipse(260,220,30,60);
  //Shadow
  c = color(215,187,187);
  fill(c);
  arc(200,200,120,120,1.5, PI + QUARTER_PI);
  //L.Ear
  ellipse(140,220,30,60);
  //Piercings
  c = color(0,0,0);
  fill(c);
  circle(137,240,20);
  circle(263,240,20);
  //Beard
  c = color(119,86,86);
  fill(c);
  square(145,230,110,0,0,50,50);
  //Nose_Ring
  stroke('black');
  strokeWeight(10);
  point(200,258);
  noStroke();
  //Nose
  c = color(253,226,226);
  fill(c);
  triangle(190,250,210,250,200,260);
  rect(195,230,10,20);
  //Hair
  c = color(119,86,86);
  fill(c);
  rect(143,125,115,40,40,40,0,0);
  triangle(190,165,210,165,200,170);
  triangle(143,165,160,165,143,230);
  triangle(258,165,240,165,257,230);
  //Glasses
  stroke(255,204,102);
  strokeWeight(4);
  c = color(255,255,255);
  fill(c);
  rect(150,210,40,30,0,0,10,10);
  rect(210,210,40,30,0,0,10,10);
  line(190,210,210,210);
  line(190,220,210,220);
  //Title
  c = (0,0,0);
  noStroke();
  textSize(size);
  size += sizeInc;
  count ++;
  if(count > 5)
  {
    sizeInc *= -1;
    count = 0;
  }
  fill(c);
  text('Simply Me...',80,100);
  //Signature
  textSize(12);
  text('Zack Leach',300,380);

}