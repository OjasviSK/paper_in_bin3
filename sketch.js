const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper, box1, box2, ground, dustbin, dustbinimage;
var thread;

function preload(){
	dustbinimage=loadImage("dustbingreen.png");
}

function setup(){
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=createSprite(690,320,100,100);
	dustbin.addImage(dustbinimage);
	dustbin.scale=0.35;
	ground=new Box(400,380,900,20);
	box1=new Box(730,320,5,100);
	box2=new Box(650,320,5,100);
	paper=new Ball(100, 300, 50, 50);

	thread = new Rope(paper.body, {x:200,y:200});
 
}


function draw(){
  	background("white");
  	Engine.update(engine);
	ground.display();
	paper.display();
	box1.display();
	box2.display();
	dustbin.display();
	thread.display();
	drawSprites();
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:0, y:-50});
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:50, y:0});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-50, y:0});
	}
}
*/
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	thread.fly();
}
