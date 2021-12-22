var bgImage,stoneImg,stoneImg2,cloudImg1,cloudImg2,boxGroup;
var playerRun,playerIdle,playerJump,enemyRun,enemyIdle;
var cherry,cartImg,chestImg,birdImg,coinAni,energy,playerDead;
var eng = 0,enemyGroup,coinGroup;

function preload(){
    bgImage = loadImage("bg/bgimg.jpeg");

    playerRun = loadAnimation("girl/Run (1).png","girl/Run (3).png","girl/Run (6).png","girl/Run (9).png","girl/Run (12).png","girl/Run (18).png");
    playerIdle = loadAnimation("girl/Idle (1).png");
    playerJump = loadAnimation("girl/Jump (5).png");
    playerDead = loadAnimation("girl/dead.png");
    enemyRun= loadAnimation("bg/e1.png","bg/e2.png","bg/e3.png","bg/e4.png","bg/e5.png");
    enemyIdle = loadAnimation("bg/e1.png");
    

    stoneImg = loadAnimation("bg/stone 1.png");
    stoneImg2 = loadImage("animals/platform.png")
    
    cloudImg1 = loadImage("bg/cloud.png");
    cloudImg2 = loadImage("bg/cloud2.png");
    cartImg = loadImage("bg/box.png");
    chestImg = loadImage("bg/chest box.png");
    cherry = loadImage("animals/cherry.png");
    enr1 = loadImage("bg/1.png");
    enr2 = loadImage("bg/2.png");
    enr3 = loadImage("bg/3.png");
    enr4 = loadImage("bg/4.png");
    enr5 = loadImage("bg/5.png");
    enr6 = loadImage("bg/6.png");

    coinAni = loadAnimation("animals/coin1.png","animals/coin2.png","animals/coin3.png","animals/coin4.png","animals/coin5.png","animals/coin6.png","animals/coin7.png");
    birdImg = loadAnimation("animals/bird1.png","animals/bird2.png","animals/bird3.png","animals/bird4.png");
  }

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 190);
  
  

  bg = createSprite((displayWidth - 50)/2,(displayHeight - 190)/2,displayWidth - 50,displayHeight - 190);
  bg.addImage("bg",bgImage);
  bg.velocityX = -2;

  player = createSprite(50,displayHeight - 260);
  player.addAnimation("idle",playerIdle);
  player.addAnimation("run",playerRun);
  player.addAnimation("jump",playerJump);
  player.addAnimation("dead",playerDead);
  player.scale=0.3;
  

  stone = createSprite(displayWidth - 140,(displayHeight - 190)/2);
  stone.addAnimation("stone",stoneImg);
  stone.velocityX = -4;
  stone.scale = 1;

  ground = createSprite((displayWidth - 50)/2,(displayHeight - 190),displayWidth - 50,50);
  ground.shapeColor = "red";

  boxGroup = new Group()

  coins = createSprite(displayWidth - 140,(displayHeight - 260)/2);
  coins.addAnimation("coin",coinAni);
  coins.velocityX = -4;
  coins.scale = 0.5;

  enbar = createSprite(displayWidth - 200,50)
  enbar.addImage("energy",enr1);
  enbar.addImage("energy2",enr2);
  enbar.addImage("energy3",enr3);
  enbar.addImage("energy4",enr4);
  enbar.addImage("energy5",enr5);
  enbar.addImage("energy6",enr6);
  enbar.scale = 0.9;

  

  coinGroup = new Group();
  enemyGroup = new Group();
  
}

function draw() {
  background(0); 

  player.collide(ground);

  if(frameCount % 200 === 0){
    enemy ();
  }

  if(keyWentDown("RIGHT_ARROW")){
      player.velocityX = 2;
      player.changeAnimation("run");
  }

  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX = 0;
    player.changeAnimation("idle");
  } 

  if(keyWentDown("LEFT_ARROW")){
    player.velocityX = -2;
    player.changeAnimation("run");
  }

  if(keyWentUp("LEFT_ARROW")){
    player.velocityX = 0;
    player.changeAnimation("idle");
  }

  if(keyWentDown("UP_ARROW") ){
    player.velocityY = -12;
    player.changeAnimation("jump");
  }

  if(keyWentUp("UP_ARROW")){
    
    player.changeAnimation("idle");
  }

  player.velocityY += 0.5;

  if(keyWentDown("SPACE")){
    player.changeAnimation()
  }
  if(eng > 50 && eng < 100){
    enbar.changeImage("energy2");
  }

  else if(eng > 100 && eng < 150){
    enbar.changeImage("energy2");
  }
  else if(eng > 150 && eng < 200){
    enbar.changeImage("energy3");
  }
  else if(eng > 200 && eng < 250){
    enbar.changeImage("energy4");
  }
  else if(eng > 250 && eng < 300){
    enbar.changeImage("energy5");
  }
  else if(eng > 300 && eng < 350){
    enbar.changeImage("energy6");
  }
  eng = eng + 0.01;

  player.debug = true;
  
  if(player.isTouching(boxGroup)){
    player.collide(boxGroup);
  }

  else{
    
    player.collide(ground);
  }

  if(frameCount % 300 === 0){

    box = createSprite(displayWidth-79,displayHeight - 235);
    box.addImage("box",cartImg);
    box.velocityX = -2;
    box.scale = 1;
    box.debug = true;
    box.setCollider("rectangle",0,0,box.width - 10,box.height - 40);

    box2 = createSprite(displayWidth,displayHeight - 235);
    box2.addImage("box",cartImg);
    box2.velocityX = -2;
    box2.scale = 1;
    box2.debug =true;
    box2.setCollider("rectangle",0,0,box2.width - 10,box2.height - 40);
  
    boxGroup.add(box);
    boxGroup.add(box2);
  }

  if(bg.x<0 ){
    bg.x=(displayWidth - 50)/2;

  }

  if(frameCount % 700 === 0){
    cher = createSprite(displayWidth - 50 ,displayHeight - 500);
    cher.addImage("cher",cherry);
    cher.velocityX = -2;
    cher.scale=0.2;
  }

  if(frameCount % 500 === 0 ){
    bird = createSprite(displayWidth-50,(displayHeight - 350)/2);
    bird.addAnimation("tort",birdImg);
    bird.velocityX = -3;
    bird.scale = 1;
    }

  if(frameCount % 2000 === 0){
    reward = createSprite(displayWidth - 50,displayHeight - 235);
    reward.addImage("reward",chestImg);
    reward.scale = 1.5;
    reward.velocityX = -2;
  }
  
  for(var i =0;i<coinGroup.length;i++){
     if(coinGroup.get(i).isTouching(player)){
        //destroy the specific coinusing get(i) 
        coinGroup.get(i).destroy()
         energy=energy-30 } }

  for(var i =0;i<enemyGroup.length;i++){
          if(enemyGroup.get(i).isTouching(player)){
             player.changeAnimation("dead");
             player.velocityX = 0;
             
           } }
  spawnClouds();
  spawnPlatforms();
    spawnCoins();
  drawSprites();
}

function enemy(){
  var en = createSprite(displayWidth-140,displayHeight - 255);
  en.addAnimation("enemy",enemyRun);
  en.velocityX = -2;
  en.scale = 0.15;
 // en.collide(stone);
 en.debug=true;
  en.collide(ground);
  enemyGroup.add(en);
}

function spawnClouds(){
  if(frameCount % 200 === 0){
  clouds = createSprite(displayWidth + 50,random(50,150));
  //var clname = "cloudImg"+Math.round(random(1,2))
    var no = Math.round(random(1,2))
  
  
  clouds.velocityX = -3;
  clouds.scale = 0.5;

  switch(no){
    case 1:
      clouds.addImage("cloud",cloudImg1);
      break;
    case 2:
      clouds.addImage("cloud",cloudImg2);
      break;
  }
  }
}

function spawnPlatforms(){
  if(frameCount % 250 === 0){
    platf = createSprite(displayWidth + 50,random(200,400));
    platf.velocityX = -2;
    platf.scale = 0.5;
    platf.addImage("platform",stoneImg2);

    if(frameCount % 750 === 0){
      coin = createSprite(displayWidth + 50,platf.y - 30);
      coin.velocityX = -2;
      coin.scale = 0.5;
      coin.addAnimation("coin",coinAni);

      coinGroup.add(coin);
    }
  }
 
}

function spawnCoins(){
  
}