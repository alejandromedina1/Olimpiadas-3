class Bot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        rectMode(CENTER);
        fill(0);
        rect(this.x - 15, this.y - 20, 10, 10);
        rect(this.x - 15, this.y + 15, 10, 10);
        rect(this.x + 15, this.y - 20, 10, 10);
        rect(this.x + 15, this.y + 15, 10, 10);
        fill(255, 255, 0);
        rect(this.x, this.y, 30, 50);
        fill(255);
        rectMode(CORNER);
    }
    getX(){
        return this.x;
    }
    setX(px){
        this.x = px;
    }
    getY(){
        return this.y;
    }
    setY(py){
        this.y = py;
    }
}