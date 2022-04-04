let diameter = 50;
let mouthOpen = 0;
let x = 0, y = 0;
let direction = 1;
const speed = 60;
const faceRight = 1;
const faceLeft = -1;

function setup() {
  createCanvas(480, 480);
  fill(255,255,0);
  frameRate(speed);
  y = height/2;
}

function draw() {
  background(200);
  noStroke();

  if (mouthOpen < 10) {
    if (direction == faceRight) {
      arc(x, y, diameter, diameter, radians(45), radians(315));
    }
    else {
      arc(x, y, diameter, diameter, radians(225), radians(495));
    }
    mouthOpen++;
  } 
  else if (mouthOpen >= 10) {
    ellipse(x, y, diameter, diameter);
    mouthOpen++;
  }

  x += 5 * direction;

  if (mouthOpen >= 19){
    mouthOpen = 0;
  }

  if ((x > width + diameter) || (x < 0 - diameter)) {
    direction = -direction;
    y = random(0 + diameter, height - diameter);
  }

  if (keyIsPressed){
    if(key == "a") {
      direction = -1; 
    }
    else if (key == "d") {
      direction = +1;
    }
  }
}
