let balls = [];
let floorY = 580;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];

    // gravity
    b.speed += 0.5;
    b.y += b.speed;

    if (b.y > floorY) {
      b.y = floorY;
      b.speed *= -0.6;
    }

    for (let j = 0; j < i; j++) {
      let o = balls[j];
      let d = dist(b.x, b.y, o.x, o.y);
      if (d < 40) { // radius*2 = 40
        b.y = o.y - 40;
        b.speed *= -0.6;
      }
    }

    fill(b.color);
    circle(b.x, b.y, 40);
  }

  fill(100);
  rect(0, floorY + 20, width, height - floorY);
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
