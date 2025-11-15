let paused = false;
let pauseBtn;
//let colored=true;
let darkAmount=0;


const BASE_W = 1000;
const BASE_H = 800;

let cnv;

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

  pauseBtn=createButton("TO DAYTIME");
  pauseBtn.position(width*0.02,height*0.02);
  
  pauseBtn.mousePressed(()=>{paused=false; 
    
    for(const c of cars)c.recolor();
    updateButtonStyle();
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

  let target=paused?1:0;
  darkAmount=lerp(darkAmount,target,0.08);

  //let t=darkAmount;
  //darkAmount=t*t*(3-2*t);

  if(darkAmount>0.01){
    noStroke();
    fill(100,110,140,160*darkAmount);
    rect(0,0,BASE_W,BASE_H);
  }
  pop();


}


function keyPressed(){
  if(key===' '){
    paused=true;
    darkMode=true;
    
    for(const c of cars)c.toGray();
    updateButtonStyle();
    }
    }
    

// Adjustment
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

