var starImg, starsGroup;

var player, playerImg, ob1, ob2, ob3;
var myBackground;
var obstaclesGroup;

var heartSprite1, heartSprite2;

var gamestate = "play";
var hearts = 3, heartSprite;

var score = 0;

function preload(){
    playerImg = loadImage("My project (8).png");
    ob1 = loadImage("My project (6).png");
    ob2 = loadImage("My project (7).png");
    ob3 = loadImage("My project (9).png");
    heartsImg = loadImage("download (5).png");
    starImg = loadImage("My project (10).png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = createSprite(windowHeight-30, windowWidth/2, 10, 10);
    player.addImage(playerImg);
    player.scale = 0.30;

    myBackground = createSprite(windowWidth/2, windowHeight/2, height, width);
    myBackground.shapeColor = rgb(112, 201, 201);

    heartSprite = createSprite(150, 50, 1, 1);
    heartSprite.addImage(heartsImg);
    heartSprite.scale = 0.1;

    heartSprite1 = createSprite(50, 50, 1, 1);
    heartSprite1.addImage(heartsImg);
    heartSprite1.scale = 0.1;

    heartSprite2 = createSprite(100, 50, 1, 1);
    heartSprite2.addImage(heartsImg);
    heartSprite2.scale = 0.1;

    obstaclesGroup = new Group();
}

function draw() {
    background(rgb(112, 201, 201));

    myBackground.depth = player.depth-1;
    
    if (gamestate === "play") {
        
        if (obstaclesGroup.x == windowHeight) {
            score = score+1;
        }

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

        stars();

        obstacleSpawn();
    
    } else if (gamestate == "end") {
        fill("White");
        stroke("Black");
        text("Game over. Score: "+score, 300, 350);
        obstaclesGroup.setVelocityYEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        
        if (mousePressedOver(myBackground)) {
            gamestate = "play";
        }
    }
    drawSprites();
}

function obstacleSpawn () {
    
    if (frameCount % 100 == 0) {
        var obstacle = createSprite(Math.round(random(0, width)), -10, 1, 1);

        var ran = Math.round(random(1, 3));
        
        obstacle.lifetime = windowHeight+10;
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

function stars () {
    if (frameCount % 90 === 0) {
        var star = createSprite(Math.round(random(0, width)), -10, 1, 1);
        star.addImage(starImg);

        star.lifetime = 710;
        star.velocityY = Math.round(frameCount % 50);

    starsGroup.add(star);
    }
}
