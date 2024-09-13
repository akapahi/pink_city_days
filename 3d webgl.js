> Biwilu:
🖼 IMG_2029.png

> Biwilu:
let i=0,j=0;
let s=3;
let outlines;
let mic, theta=0;
let pink, green,frangi,gifwindow,gif24,arch,redbluearch,gifgreen, yantr,yantrsmall,yantrsmaller;
let mypattern2,mypattern3, vases;

function preload(){
 outlines = loadImage("https://i.postimg.cc/c1zCPBBD/building-outlines.png");
 mypattern = loadImage("https://i.postimg.cc/T1w3sCwc/mypatternnobg.png");
 pink = loadImage("https://i.postimg.cc/6QtwSYbG/mirror-flower-frames-pink-bg.png")
 green = loadImage("https://i.postimg.cc/VvqKgmtb/green-frame-mirror.png")
 gifgreen = loadImage("https://i.postimg.cc/mkkjXWG2/mirror-flower-frame-gif.gif")
 gif24 = loadImage("https://i.postimg.cc/d0LnqKfM/gif-grid.gif")
 gifwindow = loadImage("https://i.postimg.cc/59RR0Ckr/semicircle-mirror-gif.gif")
 frangi = loadImage("https://i.postimg.cc/wv9X18fT/frangipani-pattern.png");
 arch = loadImage("https://i.postimg.cc/D093cgb0/arch-animation-white.gif");
 redbluearch = loadImage("https://i.postimg.cc/tTVS1hCk/redblue-arch-grid.png");
 yantrsmaller = loadImage("https://i.postimg.cc/C1KcMhCY/yanter-smsma.png");
 yantr = loadImage("https://i.postimg.cc/Dfp4nTnP/IMG-2006.png")
 yantrsmall = loadImage("https://i.postimg.cc/HWyqLvzf/yantr-small.png");
 mypattern2 = loadImage("https://i.postimg.cc/5tJr6fPG/mypattern2.png");
 mypattern3 = loadImage("https://i.postimg.cc/g0KTh1Q0/mypattern3.png");
 vases = loadImage("https://i.postimg.cc/qvNKyKF6/vases.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 let mic = new p5.AudioIn();
 mic.start();
 
}

function draw() {
 //let vol = mic.getLevel();
 //console.log(vol)
 background(0)
 for(i=0;i<width;i=i+width/s*0.5){
  for(j=0;j<width;j=j+height/s){
   push()
 
   translate(i-width/2,j-height/2)
   //rotateX(theta*-0.01)
   rotateY(theta*-0.01)
   //rotateZ(theta*-0.01)
   //texture(redbluearch)
   //box(50,150)
   //fill(255,40,30)
   //ellipse(0,0,100)
   pop()
  } 
 }
 noStroke()
 //rotateX(theta*0.001)
 rotateY(theta*-0.001)
 //rotateZ(theta*0.001)
 //normalMaterial();
 texture(gifwindow);
 //texture(mypattern3);
 cylinder(350,450);
 theta = theta+5
 
 //texture(arch);
 //sphere(350);
 //ambientLight(random(255),random(255),random(255));
 texture(mypattern);
 //cone(150,280);
 

 
}
