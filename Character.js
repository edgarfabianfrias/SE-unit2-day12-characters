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
        this.h = h * 2.5;
        this.w = w * 2;
    }
}