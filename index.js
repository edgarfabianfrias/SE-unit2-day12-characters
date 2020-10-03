
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
    speed: 10,

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
    background(200,190,250);
    drawGround(ground);
    
    if(totoroObject.x < 0  || totoroObject.x > width - totoroObject.w){
        totoroObject.speed *= -1;
    }
    totoroObject.x += totoroObject.speed;

    image(totoroObject.image, totoroObject.x, totoroObject.y, totoroObject.w, totoroObject.h);


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


