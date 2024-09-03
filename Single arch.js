//pointyness: -10 - +90
//onionness: -40 - +40

let p, o, h, c;
let op, oo, oh, oc;
let sp, so, sh;
f=0;
let theme = ["pink", "#9c5ecb", "aquamarine", "#fdfd96", "skyblue"]


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(25);

  p = random(-10, 60);
  o = random(-50,40);
  h = random(50,200);
  oc = random(theme);
  
  op = random(-10, 60);
  oo = random(-50,40);
  oh = random(50,200);
  c= random(theme)
    
}

function randomize(){
  op = p;
  oh=h;
  oc = c;
  oo = o;
  p = random(-10, 60);
  o = random(-50,40);
  h = random(50,200);
  f=0;
  c= random(theme);
  
  //console.log({p,h,o});
  //onsole.log({op,oh,oo});

}

function draw() {
  background(220);
  if(f>=1) randomize();
  let cp = lerp(op, p, f);
  let co = lerp(oo, o, f);
  let ch = lerp(oh, h, f);
  let cc = lerpColor(color(oc),color(c),f)
  drawArch(500,100, cp, co, ch,cc);
  f+=0.04;
  //console.log(f)
}

function mouseClicked(){
  randomize();
}

function drawArch(x, y, pointyness, onionness, h = 200, col){
  push();
  translate(x,y);
  fill(col)
  
  beginShape();
  vertex(0,0 - pointyness);
  bezierVertex(20,10,100,10,100+onionness,60);
  vertex(100+onionness,h + 60);
  vertex(-100-onionness,h + 60);
  vertex(-100-onionness,60)
  bezierVertex(-100,10,-20,10,0,0-pointyness);
  endShape()
  pop();
}


//   beginShape();
//   vertex(100,100)
//   bezierVertex(100,50,180,50,200,40);
//   bezierVertex(220,50,300,50,300,100);
//   vertex(300,300);
//   vertex(100,300);
//   vertex(100,100)
//   endShape();
//   pop();
