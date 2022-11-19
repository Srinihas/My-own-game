var player, playerImg;

function preload(){
    playerImg = loadImage("My project (8).png")
}

function setup() {
    createCanvas(700, 700)
    player = createSprite(700/2, 650, 10, 10)
    player.addImage(playerImg);
    player.scale = 0.10;
}

function draw() {
    background(rgb(81, 173, 173));

    player.x = mouse.x;

    if (player.x >= 700 || player.x >= 0) {
        player.x = 350;
    }

    drawSprites();
}