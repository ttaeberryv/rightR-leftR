var fixedRect, movingRect;
var rightR, leftR

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rightR = createSprite(1200,400,80,30)
  leftR = createSprite(100,400,50,80)

  //movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
  rightR.velocityX=-5;
  leftR.velocityX= 5;
}

function draw() {
  background(0,0,0);  


bounceOff(rightR, leftR);

  drawSprites();
}