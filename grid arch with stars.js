let theme = ["pink", "#9c5ecb", "aquamarine", "#fdfd96", "skyblue"]

let a = [];

let rows, cols;
let side = 60;
let i = 0, j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cols = Math.floor(windowWidth/side);
  rows = Math.floor(windowHeight/side);
  for(var i = 0; i< cols; i++){
     for(var j = 0; j < rows; j++){
      a.push(new Arch(i*side + 10, j * side + 10, random(0.01,0.02)))
     }
   }

}

function draw() {
  background(220);
  a.forEach((i) => {
  	i.show()
  })
}

class Arch {
  constructor(x, y, speed,sc=5) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sc = sc;
    
    this.p = random(-10, 60);
    this.o = random(-50, 40);
    this.h = random(50, 200);
    this.oc = random(theme);

    this.op = random(-10, 60);
    this.oo = random(-50, 40);
    this.oh = random(50, 200);
    this.c = random(theme);
    this.f = 0;
    this.sides = Math.floor(random(5,10))

    this.state = random(6) < 0.0 ? -1 : 1;
  }

  randomize() {
    this.op = this.p;
    this.oh = this.h;
    this.oc = this.c;
    this.oo = this.o;
    this.p = random(-10, 60);
    this.o = random(-40, 60);
    this.h = random(80, 200);
    this.c = random(theme);
    this.f = 0;
    this.sides = Math.floor(random(5,10))
  }
  
  show(){
    if(random(6) < 0.01) this.state *= -1;
    
    if(this.state == 1){
    if(this.f>=1) this.randomize();
    let cp = lerp(this.op, this.p, this.f);
    let co = lerp(this.oo, this.o, this.f);
    let ch = lerp(this.oh, this.h, this.f);
    let cc = lerpColor(color(this.oc),color(this.c),this.f)
    this.drawArch(this.x,this.y, cp, co, ch,cc);
    this.f+=this.speed;
    }else{
    	    let cc = lerpColor(color(this.oc),color(this.c),this.f)
    this.f+=this.speed;

    	this.star(this.x,this.y+20,10,17,this.sides, cc)
    }
  }
  
  drawArch(x, y, pointyness, onionness, h , col){
  push();
  translate(x,y);
  fill(col)
  
  beginShape();
  vertex(0,0 - pointyness/this.sc);
  bezierVertex(20/this.sc,10/this.sc,100/this.sc,10/this.sc,(100+onionness)/this.sc,60/this.sc);
  vertex((100+onionness)/this.sc,(h + 60)/this.sc);
  vertex((-100-onionness)/this.sc,(h + 60)/this.sc);
  vertex((-100-onionness)/this.sc,60/this.sc)
  bezierVertex(-100/this.sc,10/this.sc,-20/this.sc,10/this.sc,0,0-pointyness/this.sc);
  endShape()
  pop();
}

star(x, y, radius1, radius2, npoints, col) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  push();
  fill(col)
  translate(x,y);
  rotate(frameCount/10)
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = 0 + cos(a) * radius2;
    let sy = 0 + sin(a) * radius2;
    vertex(sx, sy);
    sx = 0 + cos(a + halfAngle) * radius1;
    sy = 0 + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop()
}

}
