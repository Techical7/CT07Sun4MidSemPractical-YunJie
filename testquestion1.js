let balls = [];
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.y = b.y + b.speed;
    b.speed = b.speed + 0.5;

    fill(b.color);
    circle(b.x, b.y, 40);
  }
}

function mousePressed() {

  let newBall = {
    x: mouseX,
    y: mouseY,
    speed: 0,
    color: color(random(255), random(255), random(255))
  };
  balls.push(newBall);
}
