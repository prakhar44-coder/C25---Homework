
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1,rectangle2,rectangle3
function preload()
{
bin_image = loadImage("sprites/dustbingreen.png");
}

function setup () {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20)
	
	rectangle1 = new Wall(1100,340,20,100);
	rectangle2 = new Wall(950,340,20,100);
	rectangle3 = new Wall(1020,380,150,30);
	 
	ball1 = new Ball(35,340,30);
	
    
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  ball1.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  image(bin_image, 1025, 325, 185, 150);

}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:160, y:-160});
	
	}
}


