var bgImg;
var hotairBalloon,hotairBalloonImg;
var database,positions;

function preload(){
  hotairBalloonImg = loadAnimation("balloon1.png","balloon2.png","balloon3.png");
  bgImg=loadImage("bgImage.png");
}
function setup() {
  createCanvas(500,500);

  database = firebase.database();

  hotairBalloon = createSprite(300, 200, 60, 60);
  hotairBalloon.addAnimation("ground",hotairBalloonImg);
  hotairBalloon.scale = 0.5;

  var hotairBalloonposition = database.ref('hotairBalloon/height');
  hotairBalloonposition.on("value",showError)
}

function draw() {
  background(bgImg); 
  if(keyDown(LEFT_ARROW)){
    
    hotairBalloon.x = hotairBalloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  
    hotairBalloon.x = hotairBalloon.x +10;
}
else if(keyDown(UP_ARROW)){

  hotairBalloon.addAnimation("ground",hotairBalloonImg);
  hotairBalloon.scale=hotairBalloon.scale -0.01;
  hotairBalloon.y = hotairBalloon.y -10;
}
else if(keyDown(DOWN_ARROW)){
  
    hotairBalloon.addAnimation("ground",hotairBalloonImg);
    hotairBalloon.scale = hotairBalloon.scale +0.01;

    hotairBalloon.y = hotairBalloon.y +10;

}
textSize()
  drawSprites();
}
function updateHeight(x,y){
database.ref('hotairBalloon/height').set({
  'x' : height.x + x ,
  'y' : height.y + y
})}

function showError(){
console.log("error");
}