class Ball {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        fill(255,0,255);
        ellipse(this.x,this.y,35,35);
        fill(255);
    }

    get getX(){
        return this.x;
    }
    set setX(px){
        this.x = px;
    }
    get getY(){
        return this.y;
    }
    set setY(py){
        this.y = py;
    }
}