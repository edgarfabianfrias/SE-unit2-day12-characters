
let myTotoroImage;
const imgHeight = 100;
const ground = {
    y: 550,
    color: 'brown',
}


const imageHeight = 100;


function preload(){
    
    myTotoroImage = loadImage('assets/totoro-use.png');
}
function setup(){
    createCanvas( 600, 600);
}

function draw(){

    drawGround(ground);
    image(myTotoroImage, 0, ground.y - imgHeight, 100, imgHeight);


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


