var bathImg
var brushImg
var drinkImg
var eatImg
var gymImg
var gym2Img
var background1,background1Img
var move1Img
var astronaut,sleepImg
var brushImg





function preload(){
background1Img = loadImage("iss.png")
sleepImg = loadAnimation("sleep.png")
bathImg = loadAnimation("bath1.png","bath2.png")
drinkImg = loadAnimation("drink1.png","drink2.png")
eatImg = loadAnimation("eat1.png","eat2.png")
gymImg = loadAnimation("gym1.png","gym2.png")
gym2Img = loadAnimation("gym11.png","gym12.png")
move1Img = loadAnimation("move.png","move1.png")
brushImg = loadAnimation("brush.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 background1 = createSprite(400, 200, 50, 50);
 background1.addImage(background1Img)
 background1.scale = 0.2
 astronaut = createSprite(400,200,50,50)
 astronaut.addAnimation("sleeping",sleepImg)
 astronaut.scale = 0.1
 


}

function draw() {
  background(255,255,255);  
  
 
  keyPressed()
  drawSprites();
}
function keyPressed(){
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg)
    astronaut.changeAnimation("brushing")
    astronaut.x = 700
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathImg)
    astronaut.changeAnimation("bathing")
    astronaut.x = 100
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatImg)
    astronaut.changeAnimation("eating")
    astronaut.x = 50
    astronaut.y = 350
    astronaut.velocityX = 2
    astronaut.velocityY = -0.6
    
    
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym2Img)
    astronaut.changeAnimation("gymming")
    astronaut.x = 400
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("M")){
    astronaut.addAnimation("gymming1",gymImg)
    astronaut.changeAnimation("gymming1")
    astronaut.x = 400
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("SPACE")){
    astronaut.addAnimation("move",move1Img)
    astronaut.changeAnimation("move")
    astronaut.x = 50
    astronaut.y = 350
    astronaut.velocityX = 2
    astronaut.velocityY = -1
  }

 
}