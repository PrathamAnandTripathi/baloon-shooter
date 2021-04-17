var ballplay,img,paddleplay,edge;
function preload() {
ballplay =  loadImage("ball.png");
paddleplay = loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  ballplay = createSprite(300,200,5,5);
  ballplay.addAnimation("ball.png",ballplay);
  ballplay.velocityX = 9;
  paddleplay = createSprite(320,180,25,10);
  paddleplay.addAnimation("paddle.png",paddleplay);

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  ballplay.bounceOff(edges[left]);
  ballplay.bounceOff(edges[right]);
  ballplay.bounceOff(edges[up]);
  ballplay.bounceOff(paddle);

 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW)){
     paddleplay.y = paddleplay.y-20;
  }
  
  if(keyDown(UP_ARROW)){
    paddleplay.y = paddleplay.y+20;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  ballplay.velocityy = random(-8);
}

