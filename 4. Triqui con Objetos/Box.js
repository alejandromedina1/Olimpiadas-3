class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.letter=" ";
    }

    draw() {
        rectMode(CENTER);
        fill(this.r, this.g, this.b);
        rect(this.x + 100, this.y + 100, 100, 100);
        fill(255);
        rectMode(CORNER);
    }
    showLetter(){
        textSize(80);
        text(this.letter ,this.x+75,this.y+125);
    }
    isOver(px, py) {
        return dist(px, py, this.x + 100, this.y + 100) < 50;
    }
    getR() {
        return this.r;
    }
    setR(pr) {
        this.r = pr;
    }
    getG() {
        return this.g;
    }
    setG(pg) {
        this.g = pg;
    }
    getB() {
        return this.b;
    }
    setB(pb) {
        this.b = pb;
    }
    setLetter(pLetter) {
        this.letter = pLetter;
    }
   
}