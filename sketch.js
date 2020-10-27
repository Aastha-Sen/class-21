var fixedRect, movingRect;
var object1, object2, object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  // object1 = createSprite(100,100,50,50);
  // object1.shapeColor="green";
  // object2 = createSprite(200,100,50,50);
  // object2.shapeColor="green";
  // object3 = createSprite(300,100,50,50);
  // object3.shapeColor="green";

  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;


  bounceOff(movingRect, fixedRect);
  // if(isTouching(movingRect,object1)){
  //   movingRect.shapeColor = "red";
  //   object1.shapeColor = "red";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   object1.shapeColor = "green";
  // }
  
  drawSprites();
}

