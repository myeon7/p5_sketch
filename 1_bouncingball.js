let x1 = 400;
let x2 = 300;
let x3 = 200;

let move1 = 5;
let move2 = 5;
let move3 = 5;

let pulseWidth = 80;
let grow = 4;

function setup() {
  createCanvas(800, 800);
  background(150,150,150);
}

function draw() {
  // background(150);
  fill(255,0,0);
  ellipse(x1,x1,x1,75);
  x1 = x1 + move1;

  fill(0,255,0);
  ellipse(600,x2,pulseWidth,50);
  x2 = x2 + move2;
  pulseWidth = pulseWidth + grow

  fill(0,0,255);
  ellipse(x3,400,75,75);
  x3 = x3 + move3;
  
  if((x1 > width) || (x1 <= 0)) {move1 = move1 *-1;}
  if((x2 > width) || (x2 <= 0)) {move2 = move2 *-1;}
  if((x3 > width) || (x3 <= 0)) {move3 = move3 *-1;}

  if ((pulseWidth > 180) || (pulseWidth < 60)){
    grow = grow * -1
  }
}
