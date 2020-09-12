const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var coach1, coach2, coach3, coach4, coach5, Engine1, Engine2, ground, chain1, chain2, chain3, chain4, chain5, chain6;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    Engine1 = new Coach(200, 350, 100);
    coach1 = new Coach(300, 350, 50);
    coach2 = new Coach(400, 350, 50);
    coach3 = new Coach(500, 350, 50);
    coach4 = new Coach(600, 350, 50);
    coach5 = new Coach(700, 350, 50);
    Engine2 = new Coach(800, 350, 100);

    chain1 = new chain(coach1.body, coach2.body);
    chain2 = new chain(coach2.body, coach3.body);
    chain3 = new chain(coach3.body, coach4.body);
    chain4 = new chain(coach4.body, coach5.body);
    chain5 = new engchain(coach5.body, Engine2.body);
    chain6 = new engchain(coach1.body, Engine1.body);
}

function draw(){
    background(225);
    Engine.update(engine);

    ground.display();

    coach1.display();
    coach2.display();
    coach3.display();
    coach4.display();
    coach5.display();
    chain5.display();
    Engine1.display();
    Engine2.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
}