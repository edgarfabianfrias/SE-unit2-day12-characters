
let myTotoroImage;

function preload(){
    
    myTotoroImage = loadImage('totoro-use.png');
}
function setup(){
    createCanvas( 600, 600);
}

function draw(){

    image(myTotoroImage, 0, 0, 100, 100);


}




