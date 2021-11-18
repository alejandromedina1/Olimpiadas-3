let player = new Player(50, 200);
let bot = []
bot[0] = new Bot(110, 50);

for (let i = 1; i < 4; i++) {
  bot[i] = new Bot(bot[i - 1].getX() + 60, Math.random() * 400);

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(100);
  rect(75, 0, 250, 400);
  rect(0, 150, 400, 100);
  fill(255);
  stroke(0);
  player.draw();
  player.move();
  for (let i = 0; i < 4; i++) {
    bot[i].draw();
    bot[i].setY(bot[i].getY() + Math.random() * 10);
    if (450 < bot[i].getY()) {
      bot[i].setY(-20)
    }
  }

  for (let i = 0; i < 4; i++) {
    if (dist(player.getX(),player.getY(),bot[i].getX(),bot[i].getY())<50) {
      player.setX(50);
      player.setDir(false);
      alert("You lost");
    }
  }

  if ( 400 < player.getX()) {
    player.setX(50);
    player.setDir(false);
    alert("You win");
  }
}

function keyPressed() {
  if (key === "a" || key === "A") {
    player.setDir(false);
  }

  if (key === "d" || key === "D") {
    player.setDir(true);
    player.setMov(true);
  }
}