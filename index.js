
let myTotoroImage;
const imgSize = 100;
const ground = {
    y: 550,
    color: 'brown',
}

const totoroObject = { 
    x: 0,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,

}

const imageHeight = 100;


function preload(){
    
    // myTotoroImage = loadImage('assets/totoro-use.png');
    totoroObject.image = loadImage('assets/totoro-use.png');

}
function setup(){
    createCanvas( 600, 600);
}

function draw(){

    drawGround(ground);
    image(totoroObject.image, totoroObject.x, totoroObject.y, totoroObject.w, totoroObject.h);


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


