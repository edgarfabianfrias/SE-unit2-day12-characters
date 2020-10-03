class LittleCharacter {
    constructor({x, y, w, h, img, speed}){
        const removeHeight = 50;
        this.x = x + 50;
        this.y = y + 50;
        this.w = w -50;
        this.h = h -50;
        this.img = img;
        this.speed = speed;
        
    }

    display(){
        image(this.img, this.x, this.y, this.w, this.h)
    }

    move(){
        this.x += this.speed;
    }

    checkEdges(){
        if(this.x <= 10 || this.x > canvasWidth - this.w  - 50 ){
            this.speed *= -1;
        }
    }

    update(){
        this.move();
        this.checkEdges();
    }



}


class SmilingCharacter {

    constructor({x, y, w, h, img, speed}){
        const addHeight = 200;
        this.x = x;
        this.y = y - addHeight - 200;
        this.originY = y - addHeight;
        this.w = w + addHeight/2;
        this.h = h + addHeight;
        this.img = img;
        this.speed = speed;
        this.jumpingValue = 30;
        this.driftSpeed = 3;
        
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

    jump(){
        this.y -= this.jumpingValue;
    }

    driftDown(){
        if(this.y < this.originY){
            this.y += this.driftSpeed;
        }
    }


}


