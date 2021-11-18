let box = [];
let turn = 0;
let selected = null;
let button = new Rbutton();

function setup() {
  createCanvas(400, 400);
  for (let index = 0; index < 9; index++) {
    box.push(new Array(9));
  }
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      box[row][column] = new Box(100 * row, 100 * column);
    }
  }
}

function draw() {
  background(220);
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      box[row][column].draw();
      box[row][column].showLetter();
    }
  }
  button.draw();
}

function mousePressed() {
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if ( button.getX()-40< mouseX && mouseX < button.getX()+40
        && button.getY()-20< mouseY && mouseY < button.getY()+20) {
          turn=0;
          box[row][column].setR(255);
          box[row][column].setG(255);
          box[row][column].setB(255);
        }
      if (box[row][column].isOver(mouseX, mouseY)) {
        turn++;
        console.log(turn, " ", row, " ", column);
        if (!(turn & 1) === true) {
          box[row][column].setG(0);
          box[row][column].setB(0);
          box[row][column].setLetter("X");
        }else{
          box[row][column].setG(255);
          box[row][column].setB(255);
          box[row][column].setLetter("O");
        }
        if (!(turn & 1) === false) {
          box[row][column].setR(0);
        }else{
          box[row][column].setR(255);
        }
      }
    }
  }
}