
let smilingTotoroImage, confusedTotoroImage, pikachuImage;
let smilingCharacter, confusedCharacter, pikachuCharacter;
const imgSize = 200;
const canvasWidth = 600, canvasHeight = 600;

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
    totoroObject.img = loadImage('assets/totoro-use.png');
    smilingTotoroObject.img = loadImage('assets/smiling-totoro.png');
    pikachuObject.img = loadImage('assets/pikachu.png');

}
function setup(){
    createCanvas( canvasWidth, canvasHeight);

    
    smilingCharacter = new Character(smilingTotoroObject);
    confusedCharacter = new Character(totoroObject);
    pikachuCharacter = new Character(pikachuObject);


    // smilingCharacter = new SmilingCharacter(smilingTotoroObject);


}

function draw(){
    background(200,190,250);
    drawGround(ground);
    

    smilingCharacter.constantMove();
    smilingCharacter.display();
    confusedCharacter.constantMove();
    confusedCharacter.display();
    pikachuCharacter.constantMove();
    pikachuCharacter.display();


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}


