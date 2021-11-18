player = new Player();
enemy = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 7; i++) {
    enemy.push(new Array(7));
  }
  for (let i = 0; i < 7; i++) {
    enemy[i] = new Enemy(50 * i + 50);
  }
}

function draw() {
  background(128);
  player.draw();
  for (let i = 0; i < 7; i++) {
    enemy[i].draw();
    enemy[i].mouvement();
    if (enemy[i].getX() < player.getX()+20 && player.getX()-20 < enemy[i].getX()
    && enemy[i].getY() < player.getY()+10 && player.getY()-10 < enemy[i].getY()) {
      alert ("YOU LOST!");
      enemy[i].setX(0);
      player.setY(200);
    }
  }
}

function keyPressed(){
  if (key === "w" || key === "W") {
    player.setY(player.getY()-50);
  }
  if (key === "s" || key === "S") {
    player.setY(player.getY()+50);
  }
}