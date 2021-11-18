class Obj{
    contructor(){
        this.x=x;
        this.y=y;
        this.letter=letter;
    }
   
    draw(letter, x, y){
        textSize(20);
        text(this.letter,this.x+100,this.y+100);
        textSize(12);
    }

    getX(){
        return this.x;
    }
    setX(px){
        this.x = px;
    }
    getLetter(){
        return this.letter;
    }
    setLetter(py){
        this.letter = pLetter;
    }
}