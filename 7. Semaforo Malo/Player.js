class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mov = false;
        this.dir = true;
    }
    draw() {
        rectMode(CENTER);
        fill(0);
        rect(this.x - 20, this.y - 15, 10, 10);
        rect(this.x - 20, this.y + 15, 10, 10);
        rect(this.x + 15, this.y - 15, 10, 10);
        rect(this.x + 15, this.y + 15, 10, 10);
        fill(255, 0, 0);
        rect(this.x, this.y, 50, 30);
        fill(255);
        rectMode(CORNER);
    }
    move() {
        if (this.mov === true) {
            if (this.dir === true) {
                this.x=this.x+5;
            }
        }
    }
    getX() {
        return this.x;
    }
    setX(px) {
        this.x = px;
    }
    getY() {
        return this.y;
    }
    setY(py) {
        this.y = py;
    }
    setDir(newDir) {
        this.dir = newDir;
    }
    setMov(mov) {
        this.mov = mov;
    }
}