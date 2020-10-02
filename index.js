
let myTotoroImage;

function preload(){
    
    myTotoroImage = loadImage('totoro-use.png');
}
function setup(){
    createCanvas( 600, 600);
}

function draw(){

    //image(myImage, 0, 0, 600, 600);
    image(myTotoroImage, 0, 0, 100, 100);


}

