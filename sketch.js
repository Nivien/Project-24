// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var ground;
var tanker;
var head;
/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,390,800,50);

    head = new Head(150,315,70,20, 0);
    

}

function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
Engine.update(engine);

head.display();

//console.log(head.body.angle);

fill("white");
      circle(100,345,110);
      rect(100,355,110,20);
      rect(100, 335,110,20);
    
ground.display();
}



function keyReleased() {
    // Call the shoot method for the cannon.
}

function keyPressed(){
    if(keyCode === 38){   
            Matter.Body.setAngle(head.body, head.body.angle - 0.2);
    } else if(keyCode === 40){
        Matter.Body.setAngle(head.body, head.body.angle + 0.2);
    }
}