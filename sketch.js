var bullet ,wall;
var speed,weight;






function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor='yellow';
  bullet.velocityX=speed;
wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor='grey';

 




}

function draw() {
  background('black');
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
bullet.velocityX=0;
var deformation=0.5 *weight*speed*speed/22509 ;

if(deformation>180){
  wall.shapeColor='green';
}
if(deformation<180&&deformation>100){
  wall.shapeColor='red';

} 
if(deformation<100){
  wall.shapeColor='yellow';

}
  }


  drawSprites();
}