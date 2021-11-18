class Block {
    constructor(x,y) {
        this.x = x;
        this.y =y;
        this.wide= 50;
        this.height=20;
    }
    draw(){
        rectMode(CENTER);
        rect(this.x+50,this.y+20,this.wide,this.height);
        rectMode(CORNER);
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
    getWide() {
        return this.wide;
    }
    setWide(pWide) {
        this.wide = pWide;
    }
    getHeight() {
        return this.height;
    }
    setHeight(pHeight) {
        this.height = pHeight;
    }
}