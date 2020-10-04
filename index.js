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


function preload(){
    myTotoroImage = loadImage('assets/totoro-use.png');
}
function setup(){
    createCanvas( canvasWidth, canvasHeight);
}

function draw(){

    drawGround(ground);
    image(myTotoroImage, 0, ground.y - imgSize, 100, imgSize);

}

function drawGround(ground){
    fill(ground.color);
    rect(ground.x, ground.y, ground.w, ground.h);
}


