let player1;
let player2;
let ball;
let ax = 3;
let ay = 3;
let x = 350;
let y = 250;
let p1 = 0;
let p2 = 0;


function setup() {
  createCanvas(700, 500);
  player1 = new Player(50, 250);
  player2 = new Player(650, 250);
  ball = new Ball(x, y);
}

function draw() {
  background(0);
  fill(0, 255, 255);
  player1.draw();
  fill(255, 0, 0);
  player2.draw();
  fill(255);
  ball.draw();
  ball.setX = ball.getX - ax;
  ball.setY = ball.getY - ay;
  textSize(80);
  text(p1,200,100);
  text(p2,450,100);

  if (ball.getX < 25) {
    ball.setX = 350;
    ball.setY = 250;
    ax = -ax;
    ay = -ay;
    p2++;
  }
  if (675 < ball.getX) {
    ball.setX = 350;
    ball.setY = 250;
    ax = -ax;
    ay = -ay;
    p1++;
  }

  if (ball.getY < 25 || 475 < ball.getY) {
    ay = -ay;
  }

  if (ball.getX < 75 && player1.getY - 50 < ball.getY &&
    ball.getY < player1.getY + 50) {
    ax = -ax;
  }

  if ( 625 < ball.getX && player2.getY - 50 < ball.getY &&
    ball.getY < player2.getY + 50) {
    ax = -ax;
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    player1.setY = player1.getY - 60;
  }
  if (key === 's' || key === 'S') {
    player1.setY = player1.getY + 60;
  }

  if (key === 'u' || key === 'U') {
    player2.setY = player2.getY - 60;
  }
  if (key === 'j' || key === 'J') {
    player2.setY = player2.getY + 60;
  }
}