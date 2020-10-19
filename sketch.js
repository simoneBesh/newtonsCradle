
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(100, 200, 20);
	bob2=new bob(300, 200, 20);
	bob3=new bob(500, 200, 20);
	bob4=new bob(700, 200, 20);
	bob5=new bob(900, 200, 20);

	roof1=new roof(500, 100, 300, 20);

	rope1=new rope(bob1.body, {x:410, y:100});
	rope2=new rope(bob2.body, {x:460, y:100});
	rope3=new rope(bob3.body, {x:510, y:100});
	rope4=new rope(bob4.body, {x:560, y:100});
	rope5=new rope(bob5.body, {x:600, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400, 400, 400);
  
 roof1.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -12, y:-10});
	
	}
}
