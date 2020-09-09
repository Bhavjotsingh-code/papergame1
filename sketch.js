
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  paper=new Paper(100,200,20,20)
  ground= new Ground(400,500,1800,30)
  left =new Dustbin(960,450,15,70)
  right =new Dustbin(1040,450,15,70)
  bottom=new Dustbin(1000,480,90,15)
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 
 ground.display();
 left.display();
 right.display();
 paper.display();
 bottom.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-25})
	}
}


