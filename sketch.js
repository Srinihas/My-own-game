var player, playerImg, ob1, ob2, ob3, obstaclesGroup;

var gamestate = "play";

 var hearts = 3;

function preload(){
    playerImg = loadImage("My project (8).png");
    ob1 = loadInage("My project (6).png");
    ob2 = loadImage("My project (7).png");
    ob3 = loadImage("My project (9).png");
    heartsImg = loadImage("download (5).png");
}

function setup() {
    createCanvas(700, 700)
    player = createSprite(700/2, 650, 10, 10)
    player.addImage(playerImg);
    player.scale = 0.10;
}

function draw() {
    background(rgb(81, 173, 173));
    
    if (gamestate == "play") {
    player.x = mouse.x;
    
    if (hearts ==0) {
        gamestate = "end";
    }
    
    if (player.isTouching(obstaclesGroup)) {
        hearts = hearts-1;
        player.x = 350;
        obstaclesGroup.destroyEach();
    }

    if (player.x >= 700 || player.x >= 0) {
        player.x = 350;
    }
   myFunction();
    } else if (gamestate == "end") {
        obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
    drawSprites();
}

function myFunction () {
    
    if (frameCount % 200 = 0) {
        var obstacle = createSprite(Math.round(random(0, 700)), -10, 1, 1);
        var ran = Math.round(random(1, 3);              
        
         obstacle.lifetime = 710;
         obstacle.velocityY = Math.round(frameCount % 50);
        switch (ran) {
            case 1: obstacle.addImage(ob1);
                   break;
            case 2: obstacle.addImage(ob2);
                   break;
            case 3: obstacle.addImage(ob3);
                   break;
            default: break;
        }
        obstaclesGroup.add(obstacle);
    }
    
}
