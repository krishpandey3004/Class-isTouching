var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.velocityX = 4;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.velocityX = -4;
  gameObject1 = createSprite(300,100,50,50);
  gameObject1.shapeColor = "orange";
 // gameObject1.velocityX = 4;
  gameObject2 = createSprite(500,100,50,50);
  gameObject2.shapeColor = "brown";
 // gameObject2.velocityX = -4;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
     return true;
    }
    else {
     return false;
    }
}