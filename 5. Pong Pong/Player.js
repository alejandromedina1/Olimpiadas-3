class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    draw(){
        rectMode(CENTER);
        rect(this.x,this.y,20,100);
        rectMode(CORNER);
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