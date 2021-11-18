class Enemy {
    constructor(y) {
        this.x = random(0,400);
        this.y = y;
        this.ax = -random(2,5);
    }
    draw() {
        noStroke();
        rectMode(CENTER);
        fill(26, 26, 26);
        rect(this.x + 15, this.y - 10, 10, 10);
        rect(this.x + 15, this.y + 10, 10, 10);
        rect(this.x - 10, this.y - 10, 10, 10);
        rect(this.x - 10, this.y + 10, 10, 10);
        fill(255, 2, 0);
        rect(this.x, this.y, 40, 20);
        fill(45, 155, 241);
        rect(this.x - 10, this.y, 10, 17);
        fill(255, 153, 2);
        rect(this.x + 10, this.y, 20, 17);
        rectMode(CORNER);
        stroke(1);
    }
    mouvement(){
        this.setX(this.getX()+this.ax);
        if (this.getX() < 0) {
            this.setX(410);
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
}