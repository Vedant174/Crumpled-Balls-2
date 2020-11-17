
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	dustbinImage=loadImage("sprites/dustbingreen.png")
}

var dustbinImage;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	platform = new Ground(400, 680, 800, 10)

	paper = new Paper(100, 200, 50)

	bs = new Bottom(700, 670, 100, 10)
    rs = new Right(645, 637, 10, 60)
	ls = new Left(755, 637, 10, 60)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();

  platform.display();
bs.display();
ls.display();
rs.display();
  
image(dustbinImage, 600,570,150,100)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
	}
}


