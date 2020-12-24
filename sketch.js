
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bar = new Bar(400,100,300,20)
ball1 = new Ball(50,600,30)
chain1 = new Constraint(ball1.body,bar.body,-120)
ball2 = new Ball(150,600,30)
chain2 = new Constraint(ball2.body,bar.body,-90)
ball3 = new Ball(500,600,30)
chain3 = new Constraint(ball3.body,bar.body,0)
ball4 = new Ball(800,600,30)
chain4 = new Constraint(ball4.body,bar.body,130)
ball5 = new Ball(1000,600,30)
chain5 = new Constraint(ball5.body,bar.body,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  bar.display();
  ball1.display()
  chain1.display()
  ball2.display()
  chain2.display()
  ball3.display()
  chain3.display()
  ball4.display()
 chain4.display()  
  ball5.display()
 chain5.display()
  drawSprites();
 
}



