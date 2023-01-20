var PLAY=1
var END=0

var frog, frog_jumping
var jungle 
var backgroundimg
var obstacleimg
var obstacleGroup 

function preload(){
  frog_jumping = loadAnimation("./assets/frog-1.png","./assets/frog-2.png","./assets/frog-3.png","./assets/frog-4.png")
  backgroundimg = loadImage("./assets/swamp.png")
  obstacleimg = loadImage("./assets/stone.png")
}

function setup(){
  createCanvas(1200,600);
  
  swamp=createSprite(600,300,400,20)
  swamp.addImage("swamp",backgroundimg)
  swamp.scale=2.5


  frog= createSprite(100,500,50,50);
  frog.addAnimation("jumping",frog_jumping)
  frog.scale=0.5
  frog.setCollider("circle",0,0,400)

  obstacleGroup = new Group();



}

function draw(){
  background("green")
  swamp.velocityX=-3
  if(swamp.x<600){
    swamp.x=700
  }



  
  drawSprites()
}
