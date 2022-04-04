let diameter = 50;
let mouthOpen = 0;  // speed of mouthOpen
let x = 0, y = 0;
let directionX = 1;
let directionY = 0;
const speed = 60;
const faceRight = 1;
const faceLeft = -1;
const faceUp = -1;
const faceDown = 1;


function setup() {
  createCanvas(480, 480);
  fill(255,255,0);
  frameRate(speed);
  x = 25;
  y = height/2;
}

function draw() {
  background(200);
  noStroke();

  // Pac-man face
  if (mouthOpen < 10) {
    if (directionX == faceRight) {
      arc(x, y, diameter, diameter, radians(45), radians(315));
    }
    else if (directionX == faceLeft) {
      arc(x, y, diameter, diameter, radians(225), radians(495));
    }
    else if (directionY == faceUp) {
      arc(x, y, diameter, diameter, radians(315), radians(585));
    }
    else if (directionY == faceDown) {
      arc(x, y, diameter, diameter, radians(135), radians(405));
    }
    mouthOpen++;
  } 
  else if (mouthOpen >= 10) {
    ellipse(x, y, diameter, diameter);
    mouthOpen++;
  }
  if (mouthOpen >= 19){
    mouthOpen = 0;
  }

  if (directionX) {
    x += 5 * directionX;
  }
  if (directionY) {
    y += 5 * directionY;
  }

  // Edge Detection 
  if ((x > width) || (x < 0)) {
    directionX = -directionX;
  }
  if ((y > height) || (y < 0)) {
    directionY = -directionY;
  }

  if (keyIsPressed){
    if(key == "a") {
      directionY = 0;
      directionX = -1; 
    }
    else if (key == "d") {
      directionY = 0;
      directionX = 1;
    }
    else if (key == "w") {
      directionX = 0;
      directionY = -1;
    }
    else if (key == "s") {
      directionX = 0;
      directionY = 1;
    }
  }
}
