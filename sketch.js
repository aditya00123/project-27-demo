
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Diameter = 80;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(660,200);

	ball1 = new Bob(500,600);
	ball2 = new Bob(580,600);
	ball3 = new Bob(660,600);
	ball4 = new Bob(740,600);
	ball5 = new Bob(820,600);


	chain1 = new Rope(roof.body,ball1.body,-Diameter*2,0);
	chain2 = new Rope(roof.body,ball2.body,-Diameter,0);
	chain3 = new Rope(roof.body,ball3.body,0,0);
	chain4 = new Rope(roof.body,ball4.body,Diameter,0);
	chain5 = new Rope(roof.body,ball5.body,Diameter*2,0);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');

  Engine.update(engine);

  roof.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();







text(mouseX,100,100);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:-20});
		Matter.Body.setStatic(ball1.body,false);
		Matter.Body.setStatic(ball2.body,false);
		Matter.Body.setStatic(ball3.body,false);
		Matter.Body.setStatic(ball4.body,false);
		Matter.Body.setStatic(ball5.body,false);
	}
}


