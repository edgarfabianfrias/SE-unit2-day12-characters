

//variable for our image -- decalre it globally so we can access it in both the preload and draw functions.
let myTotoroImage;
const imgSize = 100;

const canvasWidth = 600, canvasHeight = 600;
const horizon = 500;
const ground = {
    x: 0,
    y: horizon,
    w: canvasWidth,
    h: canvasHeight - horizon,
    color: 'brown',

};

const totoroObject = { 
    x: 0,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,

}




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
    rect(ground.x, ground.y, ground.w, ground.h);
}





