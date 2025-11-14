let paused = false;
let pauseBtn;
//let colored=true;
let nightMode=false;

const BASE_W = 1000;
const BASE_H = 800;

let cnv;


function setup() {
  cnv=createCanvas(windowWidth, windowHeight);
  cnv.elt.focus();

  pauseBtn=createButton("recovery&continue");
  pauseBtn.position(width*0.02,height*0.02);
  
  pauseBtn.mousePressed(()=>{paused=false; for(const c of cars){
    c.recolor();
  }
    cnv.elt.focus();
  });


  angleMode(DEGREES);


  initTownGrid();
  initOutlineBlocks();
  initGridBlocks();
  initMondrianTown();


  initCars();
}




// Draw
function draw() {
  background(255);


  let s = min(width / BASE_W, height / BASE_H);
  let ox = (width  - BASE_W * s) * 0.5;
  let oy = (height - BASE_H * s) * 0.5;


  push();
  translate(ox, oy);
  scale(s);


  push();
  translate(20, 0);
  scale(960 / original_W, 800 / original_H);


  // 1) Background
  drawSea();


  // 2) Mondrian Town
  drawMondrianTown();
  drawTownGrid();
  drawGridBlocks();
  drawTownOutline();
  drawOutlineBlocks();


  // 3) Rails & Stations
  drawRails();
  drawStations();


  // 4) Car Animation
 if (!paused) advanceCars();
  drawCars();


  pop();
  pop();
}

//function mousePressed(){
  //for(const c of cars) {
 // c.toGray();
  //}
//}

function keyPressed(){
  if(key===' '){
    paused=true;
    nightMode=true;
    
    for(const c of cars){c.toGray()};
    }
    }
    

// Adjustment
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

