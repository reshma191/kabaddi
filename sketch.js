var player1ani, player2ani;
var player1,player2;
var database

function preload()
{
    player1anim=loadAnimation("assests/player1a.png","assests/player1b.png","assests/player1a.png");
    player2anim=loadAnimation("assests/player2a.png","assests/player2b.png","assests/player2a.png");
}

function setup()
{
  createCanvas(800, 800);
  database=firebase.database();
  player1=createSprite(700,400,10,10);
  player1.addAnimation("walking",player1anim);
  player1.scale=-0.5;
  player2=createSprite(100,400,10,10);
  player2.addAnimation("walking",player2anim);
  player2.scale=0.5;


}

function draw()
{
  background("white");
  drawLines();
drawSprites();

}
function drawLines()
{
  strokeWeight(4);
  for(var i = 0; i <= 800; i = i + 20)
  {
    stroke("gray");
    line (400, i, 400, i + 10);

    stroke("yellow");
    line (100, i, 100, i + 10);

    stroke("red");
    line (700, i, 700, i + 10);
  }
}