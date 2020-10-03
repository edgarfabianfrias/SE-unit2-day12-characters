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

    move(direction, amount){
        if(direction === 'left'){
            this.x -= amount;
        } else if(direction === 'right'){
            this.x += amount;
        }
    }


}


class SmilingCharacter extends Character {
    constructor({x, y, w, h, img, speed}){
        super({x, y, w, h, img, speed})
        this.y = y -200;
        this.h = h + 200;
        this.w = w + 100;
    }
}