class Rbutton{
    constructor(){
        this.x=200;
        this.y=375;
    }
    draw(){
        rectMode(CENTER);
        fill(255,255,0);
        rect(this.x,this.y,80,40);
        textSize(20);
        fill(0);
        text("RESET",this.x-35,this.y+5);
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
    setX(py){
        this.y = py;
    }
}