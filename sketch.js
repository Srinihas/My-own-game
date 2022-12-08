var x, y;
x = windowWidth/2;
y = windowHeight/2;

var player, playerImg, ob1, ob2, ob3;
var myBackground;
var obstaclesGroup;

var gamestate = "play";
var hearts = 3;

function preload(){
    playerImg = loadImage("My project (8).png");
    ob1 = loadImage("My project (6).png");
    ob2 = loadImage("My project (7).png");
    ob3 = loadImage("My project (9).png");
    heartsImg = loadImage("download (5).png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = createSprite(windowHeight-30, windowWidth/2, 10, 10);
    player.addImage(playerImg);
    player.scale = 0.30;

    myBackground = createSprite(y, x, height, width);
    myBackground.shapeColor = rgb(112, 201, 201);

    obstaclesGroup = new Group();
}

function draw() {
    background(rgb(112, 201, 201));

    myBackground.depth = player.depth-1;
    
    if (gamestate === "play") {
        
        obstaclesGroup.setVelocityYEach(4);

        player.x = World.mouseX;
        player.y = World.mouseY;
        
        if (hearts === 0) {
            gamestate = "end";
        }
        
        if (obstaclesGroup.isTouching(player)) {
            hearts = hearts-1;
            player.x = windowWidth/2;
            obstaclesGroup.destroyEach();
        }

        obstacleSpawn();
    } else if (gamestate == "end") {
        fill("White");
        stroke("Black");
        text("Sorry, but the game is over", 300, 350);
        obstaclesGroup.setVelocityYEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        
        if (mousePressedOver(myBackground)) {
            gamestate = "play";
        }
    }
    drawSprites();
}

function showText () {
    fill("black");
    stroke("black");
    text(+hearts, x, y);
}

function obstacleSpawn () {
    
    if (frameCount % 100 == 0) {
        var obstacle = createSprite(Math.round(random(0, width)), -10, 1, 1);

        var ran = Math.round(random(1, 3));
        
        obstacle.lifetime = 710;
        obstacle.velocityY = Math.round(frameCount % 50);
        switch (ran) {
            case 1: obstacle.addImage(ob1), obstacle.scale = 0.5;
                   break;
            case 2: obstacle.addImage(ob2), obstacle.scale = 0.5;
                   break;
            case 3: obstacle.addImage(ob3), obstacle.scale = 0.5;
                   break;
            default: break;
        }
        obstaclesGroup.add(obstacle);
    }
    
}
