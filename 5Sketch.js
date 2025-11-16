//New define
let paused = false;
let pauseBtn;
let darkAmount=0;


const BASE_W = 1000;
const BASE_H = 800;

//create a canvas
let cnv;

//create button visual 
function updateButtonStyle(){
  if(paused){
    pauseBtn.html("TO DAYTIME");
    pauseBtn.style("background","#333");
    pauseBtn.style("color","#fff");
  }else{
    pauseBtn.html("TO DAYTIME");
    pauseBtn.style("background","#ddd");
    pauseBtn.style("color","#000");
  }
}

function setup() {
  
  cnv=createCanvas(windowWidth, windowHeight);
  cnv.elt.focus();
//Recovery Mode
  pauseBtn=createButton("TO DAYTIME");
  pauseBtn.position(width*0.02,height*0.02);
  
  pauseBtn.mousePressed(()=>{paused=false; 
    
    for(const c of cars)c.recolor();
    updateButtonStyle();
    //Restore keyboard input let keyboard controls to continue
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


  // 4) Stop Car Animation
 if (paused === false) {
  advanceCars();
}
  drawCars();


  pop();

  //Night mode fade in and fade out
  let target=paused?1:0;
  darkAmount=lerp(darkAmount,target,0.08);


  if(darkAmount>0.01){
    noStroke();
    fill(100,110,140,160*darkAmount);
    rect(0,0,BASE_W,BASE_H);
  }
  pop();


}

//presses the spacebar, switch to the 'Pause + Night Mode' state.
function keyPressed(){
  if(key===' '){
    paused=true;
    
    for(const c of cars)c.toGray();
    //change the botton's style in the same time
    updateButtonStyle();
    }
    }
    

// Adjustment
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

