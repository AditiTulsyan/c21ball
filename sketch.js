
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,l1,l2;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(400,680,800,20)
ground=new Ground(200,580,400,10)
var xyz={
	isStatic:false,
	restitution:0.3,
	density:1.2,
	friction:0,

}
ball=Bodies.circle(250,665,15,xyz);
World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground. display();
  ellipseMode(RADIUS);
  ellipse (ball.position . x ,ball.position.y,15,15);
  drawSprites();
 
}



