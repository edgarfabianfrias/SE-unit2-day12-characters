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

