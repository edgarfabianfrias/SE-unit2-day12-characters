
let smilingTotoroImage, confusedTotoroImage, pikachuImage;
let smilingCharacter, confusedCharacter, pikachuCharacter;
const imgSize = 100;
const canvasWidth = 600, canvasHeight = 600;

const ground = {
    y: 550,
    color: 'brown',
}

const totoroObject = { 
    x: 11,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,
    speed: 1,
}


const smilingTotoroObject = { 
    x: 200,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,
    speed: 3,
    addHeight: 200,
    jumpingValue: 30,
}

const pikachuObject = { 
    x: 400,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,
    speed: 2,
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

    
    // smilingCharacter = new Character(smilingTotoroObject);
    confusedCharacter = new LittleCharacter(totoroObject);
    pikachuCharacter = new LittleCharacter(pikachuObject);


    smilingCharacter = new SmilingCharacter(smilingTotoroObject);


}

function draw(){
    background(200,190,250);
    drawGround(ground);
    
    checkKeyInput();
    smilingCharacter.driftDown();
    smilingCharacter.display();


    confusedCharacter.checkEdges();
    confusedCharacter.move('right');
    confusedCharacter.display();

    pikachuCharacter.checkEdges();
    pikachuCharacter.move('left');
    pikachuCharacter.display();


}


function drawGround(ground){
    fill(ground.color);
    rect(0, ground.y, width, height - ground.y);
}

function checkKeyInput(){
    if(keyIsDown(RIGHT_ARROW)){
        smilingCharacter.move('right');
    }

    if(keyIsDown(LEFT_ARROW)){
        smilingCharacter.move('left');
    }

    if(keyIsDown(UP_ARROW)){
        smilingCharacter.jump();
    }

    // if(keyIsDown(DOWN_ARROW)){
    //     myPlayerBall.move('y', 1);
    // }
}


