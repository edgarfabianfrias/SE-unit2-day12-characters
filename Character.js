class Character {
    constructor({x, y, w, h, img, speed}){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = speed;
        
    }

    display(){
        image(this.img, this.x, this.y, this.w, this.h)
    }
    move(direction){
        if(direction === 'left'){
            if(this.x > 0){
                this.x -= this.speed;
            }
        } else if(direction === 'right'){
          if(this.x < canvasWidth - this.w){
            this.x += this.speed;
          }
        }
    }


}


class SmilingCharacter extends Character {
    constructor({ x, y, w, h, img, speed }){
        const addHeight = 200;
        super({ x, y, w, h, img, speed});
        this.y = this.y - addHeight -200;
        this.w = w + addHeight/2;
        this.h = h + addHeight;
        this.jumpingValue = 30;
        this.originY = y - 200;
        this.driftSpeed = 3;
           
    }

    jump(){
        this.y -= this.jumpingValue;
    }

    driftDown(){
        if(this.y < this.originY){
            this.y += this.driftSpeed;
        }
    }
}


class LittleCharacter extends Character {
    constructor({ x, y, w, h, img, speed}){
        super({ x, y, w, h, img, speed});
    }

    checkEdges(){
        if(this.x <= 10 || this.x > canvasWidth - this.w  - 50 ){
            this.speed *= -1;
        }
    }
}