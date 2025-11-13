let paused = false;
let pauseBtn;


const BASE_W = 1000;
const BASE_H = 800;


function setup() {
  createCanvas(windowWidth, windowHeight);


  pauseBtn=createButton("stop/start");
  pauseBtn.position(20,20);
  pauseBtn.mousePressed(()=>paused=!paused);


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




// Adjustment
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

