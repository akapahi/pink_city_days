let x = 0,
 y = 0,
 size = 100,
 i = 10,
 c,
 r,
 w;
let counter=0;
let t = 0;
let redcamel,bluecamel,redcamelnobg;

function preload(){
 redcamel = loadImage("https://i.postimg.cc/QdqYTQGk/camelred.png")
 redcamelnobg = loadImage("https://i.postimg.cc/6qYxcDFz/camel-red.png");
 bluecamel = loadImage("https://i.postimg.cc/W1qxqFp5/camel-green-right.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 rectMode(CENTER);
 imageMode(CENTER);
 angleMode(DEGREES);
 noStroke();
 c = color(248, 117, 115);
 r = 0;
 mic = new p5.AudioIn();

 // start the Audio Input.
 // By default, it does not .connect() (to the computer speakers)
 mic.start();
}

function draw() {
 background("#638968");
 let vol = mic.getLevel();

 for (x = (size * 1.4142) / 2; x < width; x += size * 1.4142) {
  for (y = (size * 1.4142) / 2; y < height; y += size * 1.4142) {
   //i = size/3.45;
   push();
   translate(x, y);
   scale((vol + 0.01) * 10);
   fill(c);
   rect(0, 0, size, size);
   rotate(frameCount);
   fill(c);
   rect(0, 0, size, size);
   if(counter%2 == 0){
   image(redcamel,0,0,50,50)
   }
   else{
   image(bluecamel,0,0,50,50) 
   }
   pop();
   counter++
   //r++;
  }
 } counter = 0;
 textSize(90);

 fill("#638968");
 rect(width/2-100, height/2-50, width-350, 150)
 fill(c);
 text("PINK CITY DAYS", width-1000, height / 2)
}
