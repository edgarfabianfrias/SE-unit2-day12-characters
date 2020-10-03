
let myTotoroImage;
const imgSize = 200;

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


const smilingTotoroObject = { 
    x: 100,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,
    speed: 3,
}

const pikachuObject = { 
    x: 200,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,
    speed: 5,
}



const imageHeight = 100;


function preload(){
    
    // myTotoroImage = loadImage('assets/totoro-use.png');
    totoroObject.image = loadImage('assets/totoro-use.png');
    smilingTotoroObject.image = loadImage('assets/smiling-totoro.png');
    pikachuObject.image = loadImage('assets/pikachu.png');

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

    if(smilingTotoroObject.x < 0  || smilingTotoroObject.x > width - smilingTotoroObject.w){
        smilingTotoroObject.speed *= -1;
    }
    smilingTotoroObject.x += smilingTotoroObject.speed;

    if(pikachuObject.x < 0  || pikachuObject.x > width - pikachuObject.w){
        pikachuObject.speed *= -1;
    }
    pikachuObject.x += pikachuObject.speed;

    image(totoroObject.image, totoroObject.x, totoroObject.y, totoroObject.w, totoroObject.h);
    image(smilingTotoroObject.image, smilingTotoroObject.x, smilingTotoroObject.y, smilingTotoroObject.w, smilingTotoroObject.h);
    image(pikachuObject.image, pikachuObject.x, pikachuObject.y, pikachuObject.w, pikachuObject.h);


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


