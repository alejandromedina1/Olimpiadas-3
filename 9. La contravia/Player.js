class Player {
    constructor() {
        this.x = 50;
        this.y = 200;
    }
    draw() {
        noStroke();
        rectMode(CENTER);
        fill(26, 26, 26);
        rect(this.x - 15, this.y - 10, 10, 10);
        rect(this.x - 15, this.y + 10, 10, 10);
        rect(this.x + 10, this.y - 10, 10, 10);
        rect(this.x + 10, this.y + 10, 10, 10);
        fill(0);
        rect(this.x, this.y, 40, 20);
        fill(45, 155, 241);
        rect(this.x + 10, this.y, 10, 17);
        fill(255, 153, 2);
        rect(this.x - 10, this.y, 20, 17);
        fill(255);
        rectMode(CORNER);
        stroke(1);
    }
    getY() {
        return this.y;
    }
    setY(py) {
        this.y = py;
    }
    getX() {
        return this.x;
    } 
}