
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2
var box3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	engine = Engine.create();
	world = engine.world;

	box1=new Box(150,650,50,100);
	
	box2=new Box(590,650,50,100);

	box3=new Box(370,670,490,20);

	ground=new Ground(200,690,1200,20)



	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);

	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyDownpressed();
  drawSprites();

  box1.display();
  box2.display();
  box3.display();

  ground.display();

 
}
function keyDownpressed(){
if (keyDown(DOWN_ARROW)) {

	Matter.Body.setStatic(packageBody,false)

  }
}




