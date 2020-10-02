let myImage;
let myTotoro;
function preload(){
     myImage = loadImage('slime_monster_spritesheet.png');
    myTotoro = loadImage('totoro-use.png');
}
function setup(){
    createCanvas( 600, 600);
}

function draw(){

    //image(myImage, 0, 0, 600, 600);
    image(myTotoro, 0, 0, 100, 100);


}

