const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player,bill,enemy;
var bullet;
var AGroup;
var bulletGroup;
var enemiesGroup;

function preload() {
 // boy = loadImage()
}

function setup() {
  createCanvas(1200,600);
  player = createSprite(200,300,50,50);
  engine = Engine.create();
  world = engine.world;
  AGroup =  new Group();
  bulletGroup =  new Group();
  enemiesGroup = new Group();
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  Bill();
  bullets();
  enemyShips();
  drawSprites();
 
}

function enemyShips(){
  //defining the body of obstacles
  if(World.frameCount%50===0){
  var enemy=createSprite(206,372);
  }  
  enemy.scale=0.5;
  enemy.velocityY = 8;
  enemy.y=28;
  enemy.x=randomNumber(17,363);
  enemy.setAnimation("enemy");
  enemiesGroup.add(enemy);
  if(gameState === "End"){
    enemiesGroup.setLifetimeEach(-1);
  }
  

   
  }

  function Bill(){

    if(frameCount%30 === 0) {
    var bill = createSprite(160,17);
    bill.velocityY = 6;
    //bill.setAnimation("ore_ironAlt_1");
    bill.scale=0.5;
    bill.y=28;
    bill.x=randomNumber(10,390);
    }
    
    AGroup.add(bill);
    if(gameState === "End"){
  AGroup.setLifetimeEach(-1);
}
  }
function bullets(){
  var bullet=createSprite(216,371,6,9);
  bullet.y=player.y;
  bullet.velocityY=-3;
  bulletGroup.add(bullet);
}