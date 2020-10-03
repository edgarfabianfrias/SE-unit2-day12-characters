
let myTotoroImage;

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

    image(myTotoroImage, 0, 0, 100, 100);


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


