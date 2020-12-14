var bullet,wall;
var speed,weight;
var thickness ,damage;


function setup() {

  createCanvas(1600,400);
  
  speed = random (223,321);
  weight= random (30,52);
  thickness = random (22,83)
  wall=createSprite(1200,200,thickness,height/2)
  bullet=createSprite(50, 200, 50, 5);

  wall.shapeColor=color(80,80,80)
  bullet.velocityX = speed ;
   damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

}

function draw() {
  background("black"); 
  if(hasColided(bullet , wall)){
bullet.velocityX=0

if(damage>10){
wall.shapeColor=color(255,0,0)
}

else if(damage<10){
wall.shapeColor=color(0,255,0)
}
  }
  
  drawSprites();
}
function hasColided (lbullet , lwall ) {
bulletRightEdge = lbullet.x + lbullet.width ;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}