let hair = [5];
let eyes = [4];
let lips = [4];
let brown = [3];
let nose = [3];
ch = 0;
ce = 0;
cl = 0;
cb = 0;
cn = 0;

function setup() {
  createCanvas(500, 350);
  hair[0] = new Imagenes(loadImage("/Character/Hair/H1.png"), 250, 222);
  hair[1] = new Imagenes(loadImage("/Character/Hair/H2.png"), 250, 222);
  hair[2] = new Imagenes(loadImage("/Character/Hair/H3.png"), 250, 222);
  hair[3] = new Imagenes(loadImage("/Character/Hair/H4.png"), 250, 222);
  hair[4] = new Imagenes(loadImage("/Character/Hair/H5.png"), 250, 222);

  eyes[0] = new Imagenes(loadImage("/Character/Eyes/E1.png"), 250, 200);
  eyes[1] = new Imagenes(loadImage("/Character/Eyes/E2.png"), 250, 200);
  eyes[2] = new Imagenes(loadImage("/Character/Eyes/E3.png"), 250, 200);
  eyes[3] = new Imagenes(loadImage("/Character/Eyes/E4.png"), 250, 200);

  lips[0] = new Imagenes(loadImage("/Character/Lips/L1.png"), 250, 260);
  lips[1] = new Imagenes(loadImage("/Character/Lips/L2.png"), 250, 260);
  lips[2] = new Imagenes(loadImage("/Character/Lips/L3.png"), 250, 260);
  lips[3] = new Imagenes(loadImage("/Character/Lips/L4.png"), 250, 260);

  brown[0] = new Imagenes(loadImage("/Character/Brown/B1.png"), 250, 180);
  brown[1] = new Imagenes(loadImage("/Character/Brown/B2.png"), 250, 180);
  brown[2] = new Imagenes(loadImage("/Character/Brown/B3.png"), 250, 180);

  nose[0] = new Imagenes(loadImage("/Character/Nose/N1.png"), 250, 225);
  nose[1] = new Imagenes(loadImage("/Character/Nose/N2.png"), 250, 225);
  nose[2] = new Imagenes(loadImage("/Character/Nose/N3.png"), 250, 225);

}

function draw() {
  background(220);
  hair[ch].show();
  eyes[ce].show();
  lips[cl].show();
  brown[cb].show();
  nose[cn].show();

  //Hair buttom
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(400, 125, 10, 20);
  rect(100, 125, 10, 20);
  noFill();
  fill(0);
  triangle(395, 115, 405, 125, 395, 135);
  triangle(105, 115, 95, 125, 105, 135);
  rectMode(CORNER);

  //Brown buttom
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(400, 160, 10, 20);
  rect(100, 160, 10, 20);
  noFill();
  fill(0);
  triangle(395, 150, 405, 160, 395, 170);
  triangle(105, 150, 95, 160, 105, 170);
  rectMode(CORNER);

  //Eyes buttom
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(400, 195, 10, 20);
  rect(100, 195, 10, 20);
  noFill();
  fill(0);
  triangle(395, 185, 405, 195, 395, 205);
  triangle(105, 185, 95, 195, 105, 205);
  rectMode(CORNER);

  //Nose buttom
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(400, 230, 10, 20);
  rect(100, 230, 10, 20);
  noFill();
  fill(0);
  triangle(395, 220, 405, 230, 395, 240);
  triangle(105, 220, 95, 230, 105, 240);
  rectMode(CORNER);

  //lips buttom
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(400, 265, 10, 20);
  rect(100, 265, 10, 20);
  noFill();
  fill(0);
  triangle(395, 255, 405, 265, 395, 275);
  triangle(105, 255, 95, 265, 105, 275);
  rectMode(CORNER);

}

function mousePressed(){
  if (mouseX > 395 && mouseX < 395 + 10 &&
    mouseY > 115 && mouseY < 115 + 20) {
      if (ch === 4){
        ch = 0;
      }else{ 
        ch++;
      }
  }
  if (mouseX > 95 && mouseX < 95 + 10 &&
    mouseY > 115 && mouseY < 115 + 20) {
      if (ch === 0){
        ch = 4;
      }else{ 
        ch--;
      }
  }
  if (mouseX > 395 && mouseX < 395 + 10 &&
    mouseY > 150 && mouseY < 150 + 20) {
      if (cb === 2){
        cb = 0;
      }else{ 
        cb++;
      }
  }
  if (mouseX > 95 && mouseX < 95 + 10 &&
    mouseY > 150 && mouseY < 150 + 20) {
      if (cb === 0){
        cb = 2;
      }else{ 
        cb--;
      }
  }
  if (mouseX > 395 && mouseX < 395 + 10 &&
    mouseY > 185 && mouseY < 185 + 20) {
      if (ce === 3){
        ce = 0;
      }else{ 
        ce++;
      }
  }
  if (mouseX > 95 && mouseX < 95 + 10 &&
    mouseY > 185 && mouseY < 185 + 20) {
      if (ce === 0){
        ce = 3;
      }else{ 
        ce--;
      }
    }
  if (mouseX > 395 && mouseX < 395 + 10 &&
    mouseY > 220 && mouseY < 220 + 20) {
      if (cn === 2){
        cn = 0;
      }else{ 
        cn++;
      }
  }
  if (mouseX > 95 && mouseX < 95 + 10 &&
    mouseY > 220 && mouseY < 220 + 20) {
      if (cn === 0){
        cn = 2;
      }else{ 
        cn--;
      }
  }
  if (mouseX > 395 && mouseX < 395 + 10 &&
    mouseY > 255 && mouseY < 255 + 20) {
      if (cl === 3){
        cl = 0;
      }else{ 
        cl++;
      }
  }
  if (mouseX > 95 && mouseX < 95 + 10 &&
    mouseY > 255 && mouseY < 255 + 20) {
      if (cl === 0){
        cl = 3;
      }else{ 
        cl--;
      }
  }
}

