var ball;
var edges;
var jugador1;
var largo;
var ancho;
var jugador2;
var score1=0;
var score2=0;
var status="play"
function setup() {
    largo=screen.height-70;
    ancho=screen.width;
  createCanvas(ancho, largo);
    ball=createSprite(100, 250, 50, 15)
    jugador1=createSprite(35, largo/2, 25, 120)
    jugador2=createSprite(ancho-35, largo/2, 25, 120)
ball.shapeColor = "black";
    jugador1.shapeColor = "white"
    jugador2.shapeColor = "white"
    ball.addImage("ball",corazon)
    ball.scale= 0.2
    edges=createEdgeSprites();
    ball.velocityY = 19;
    ball.velocityX = 23;
    pongmusic.play()


}

function draw() {
    background("black");
     ball.bounceOff(edges[1]);     
     ball.bounceOff(edges[2]);     
     ball.bounceOff(edges[3]);     
     
     jugador2.bounceOff(edges[2])
     jugador2.bounceOff(edges[3])
     ball.bounceOff(jugador2, puntos2);
     ball.bounceOff(jugador1, puntos1);
     jugador1.bounceOff(edges[2])
     jugador1.bounceOff(edges[3])

jugador2.y=ball.y
if(keyDown(UP_ARROW)){
    jugador1.y=jugador1.y-17
    
}
if(keyDown(DOWN_ARROW)){
    jugador1.y=jugador1.y+17
}
if(ball.isTouching(edges[0])){
    status="game over"
    ball.destroy()
    pongmusic.stop()
    gameover.play()
    ball.velocityX=0
    ball.velocityY=0
}
if(status=="game over"){
    fill("white")
    textSize(45)
    text("PERDISTE",(ancho/2)-135, (largo/2)-30)    
    textSize(25)
    textWrap(WORD)
    text("reinicia la pagina para continuar",(ancho/2)-135, largo/2, 300)
    
    
}
if(status=="play"){
    fill("white")
    for(x=0; x<ancho; x=x+30){
        rect(x, largo/2, 20, 10)
    }
    
        
}
    
  text(score1+" puntos", (ancho/2)-135, 50)
  text(score2+" puntos", (ancho/2)+20, 50)
drawSprites();
  

  

}
function puntos1(){
        score1++
        rebotar.play()
}
function puntos2(){
    score2++
    rebotar.play()
}
function preload(){
    corazon=loadImage("corazon.png")
    rebotar=loadSound("bump.wav")
    gameover=loadSound("gameover.mp3")
    pongmusic=loadSound("pongmusic.mp3")
}
