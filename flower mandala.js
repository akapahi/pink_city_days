
let f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,mic;
let i, elements=16;
let side=100;
let r=1,g=1,b=1;

function preload(){
 f1= loadImage("https://i.postimg.cc/MHvHwpWh/Red-gold-floral-pattern.png")
 f2= loadImage("https://i.postimg.cc/GtG5fvWt/blue-gold-floral-pattern.png")
 f3= loadImage("https://i.postimg.cc/LX2KjHwJ/dot-flower-left.png")
 f4= loadImage("https://i.postimg.cc/8cz2nZ1D/dot-flower-right.png")
 f5 = loadImage("https://i.postimg.cc/5N6cBK7S/lotus-bud-left.png")
 f6 = loadImage("https://i.postimg.cc/L67cNkGK/lotus-bud-right.png")
 f7 = loadImage("https://i.postimg.cc/HWSD712L/lotus-flower-left.png")
 f8 = loadImage("https://i.postimg.cc/vBhRzJw3/lotus-flower-right.png")
 f9 = loadImage("https://i.postimg.cc/T1Nz8nwb/lotus-flower-warp-right.png")
 f10 = loadImage("https://i.postimg.cc/D093cgb0/arch-animation-white.gif")
 
 
}


function setup() {
 createCanvas(windowWidth, windowHeight)
 angleMode(DEGREES);
 frameRate(4)
 mic = new p5.AudioIn();
 mic.start();
 
}

function draw() {
 let vol = mic.getLevel();
 background(0);
 //background(r,g,b,5);
 if(r>255b>255){
  r= r*-5;
  g=g*-1;
  b=b*-2;
 }
 
  push()
  translate(width/2,height/2)
 for(i=0;i<elements;i++){
  r=r+1;g=g+1,b=b+1
  stroke(255)
  noFill()
  line(0,0,width/2,0);
  // image(f9,0,10,30,200);
  // image(f6,20,30,30,40);
  // image(f1,60,30,30,40);
  // image(f3,120,30,70,40);
  // image(f4,200,30,170,140);
  // image(f1,320,30,100,140);
  // image(f2,100,30,30,40);
  //ellipse(30,0,300,300)
  //rotate(22.5+frameCount);
  rotate(22.5)
  // ellipse(40,0,30)
  // image(f2,100,30,30,40);
  // image(f1,60,30,30,40);
  // image(f7,120,30,100,100);
  // image(f9,160,30,100,60);
  // image(f5,280,30,170,140);
  //image(f10,37,30,1000*vol,1000*vol);
  side=80;
  //ellipse(30,0,300,300)
  // quad(0, 0, side, 0, side*1.5, side * 0.5 * 1.732,side *0.5, side * 0.5 * 1.732);
  rotate(-22.5)
  // ellipse(200,0,300,300)
  rotate(45)
 }
 pop()
}
