
let smilingTotoroImage, confusedTotoroImage, pikachuImage;
let smilingCharacter, confusedCharacter, pikachuCharacter;
let gameOver = false;
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


const littles = [];


function preload(){
    
    // myTotoroImage = loadImage('assets/totoro-use.png');
    totoroObject.img = loadImage('assets/totoro-use.png');
    smilingTotoroObject.img = loadImage('assets/smiling-totoro.png');
    pikachuObject.img = loadImage('assets/pikachu.png');

}
function setup(){
    createCanvas( canvasWidth, canvasHeight);

    
    // smilingCharacter = new Character(smilingTotoroObject);
    littles.push(new LittleCharacter(totoroObject));
    littles.push(new LittleCharacter(pikachuObject));


    smilingCharacter = new SmilingCharacter(smilingTotoroObject);


}

function draw(){
    
    checkGameOver();

    if(!gameOver){
        drawGame();
    } else {
        background(0);
    }
    

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

function drawGame(){
    background(200,190,250);
    drawGround(ground);
    
    checkKeyInput();

    littles.forEach( little => {
        little.update();
        little.display();
    })


    smilingCharacter.driftDown();
    smilingCharacter.display();


    if(Math.random() > 0.999){
        addLittle()
    }
        
        


}

function checkGameOver(){
    // if(smilingCharacter.y > 250){
    //     gameOver = true;
    // }

    console.log(smilingCharacter.y);
    console.log(littles[0].y);

    littles.forEach(little => {
        if(smilingCharacter.x > little.x && smilingCharacter.x < little.x + little.w && smilingCharacter.y + smilingCharacter.h > little.y){
            gameOver = true;
        }
    })
}


function addLittle(){
    const object = Math.random() > 0.5 ? totoroObject : pikachuObject;
    littles.push(new LittleCharacter(object));
}

