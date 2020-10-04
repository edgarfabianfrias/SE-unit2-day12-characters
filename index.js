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
    
    // myTotoroImage = loadImage('assets/totoro-use.png');
    totoroObject.image = loadImage('assets/totoro-use.png');

}
function setup(){
    createCanvas( canvasWidth, canvasHeight);
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
    rect(ground.x, ground.y, ground.w, ground.h);
}







