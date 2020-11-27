
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(300,300);
monkey=createSprite(80,210,10,50);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
ground=createSprite(200,250,400,10);
ground.x = ground.width /2;  
score=0;  
FoodGroup=createGroup();
obstacleGroup=createGroup();  
  
}


function draw() {
background("white");
 if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
 }
 text("Score: "+ score, 200,50); 
 monkey.velocityY = monkey.velocityY + 0.8;
 monkey.collide(ground);
  
  ground.velocityX=-4;
  if (ground.x < 150){
      ground.x = ground.width/4;
    }
  
  if(FoodGroup.isTouching(monkey)){
   FoodGroup.destroyEach();
   score=score+1; 
}
  if(obstacleGroup.isTouching(monkey)){
   obstacleGroup.setVelocityX=0;
   FoodGroup.setVelocityX=0; 
}
 spawnBananas();
 spawnObstacles(); 
  
  
drawSprites();  
}
function spawnBananas(){
if (frameCount % 200 === 0) {
banana=createSprite(200,100,30,10);
banana.addImage(bananaImage);
banana.y = Math.round(random(80,120));  
banana.velocityX=-4;
banana.scale=0.1;
FoodGroup.add(banana);  
}

}
function spawnObstacles(){
if (frameCount % 165 === 0) {
obstacle=createSprite(200,230,10,40);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
obstacle.velocityX=-4;
obstacleGroup.add(obstacle);  
}  
 
}






