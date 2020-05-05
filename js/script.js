let s,i,u,k,m,p,f,x=0,y=0,c=180,g=!0,l=250,z=50;function setup(){createCanvas(800,500),noStroke()}function draw(){if(background(c),k=keyIsPressed,g)isNaN(x)||(x+=". hit R"),k&&"r"==key&&(g=!g,x=0,y=0,s=random(c));else{for(k&&("s"==key&&(y+=6),"w"==key&&(y-=6)),y+=2,x+=7,i=0;i<8;i++)m=i*c-x%c,p=x/l,u=floor((-x-1)/c),f=q(2),fill(0,z),rect(m,f,c,350-p),6-i<x/c&&(fill(c),rect(m,f+2*q(1),9+p,q(0)+p));for(fill("#c338"),ellipse(l,y+l,z,z),loadPixels(),i=0;i<16e5;i+=4)pixels[i]>c+1&&(g=!0)}fill(z),text(x,z,z)}function q(e){return noiseSeed(s+e),noise(i-u)*c}

/*
UNCOMPRESSED & COMMENTED:


let x=0;  // obstacles x displacement
let y=0; // player y coordinate
let c=130; // distance between obstacles
let s; // noise seed
let g = true; // game over
let t; // time counter
//let r = "#d00a"; // object color
let i; // iterator variable
let l=250; // half canvas height... but also just the value 250
let z=50; // ellipse radius
// setup()
// creates drawing area
function setup(){
createCanvas(800,500);
noStroke();
}

// draw()
// is the game loop
function draw(){

  // draw transparent background
  background("#927a");
  let k=keyIsPressed; // this is better than writing keyIsPressed twice
  // time value is inverse of obstacles displacement
  t=-x;

  // obstacles get larger as the game progresses
//  strokeWeight(10+t/1000);

  // if game is running
  if(!g){

    // move obstacles over
    x-=5;

    // check key inputs
    if(k){
      if(key=='s') y+=6;
      if(key=='w') y-=6;
    }

    // make player fall
    y+=2;
    // prevent falling below screen
  //  if(y>l||y<-l) g=!g;



    // platforms:

  for(i=0; i<8; i++){

    // line y and line height each get their own noise seed
    noiseSeed(s+1);
    let m=i*c+x%c;  // line X
    let u=floor((x-1)/c); // get noise index
    let n = noise(i-u)*5*c;  // get line Y
    let p=t/500;

    noiseSeed(s+2);
    fill("#34f8");
    rect(m,noise(i-u)*c,c,400);

    if(6-i>-x/c) noFill(); // fade in platforms on start
    else fill("#927a");

    noiseSeed(s);
    rect(m,n,9+p,noise(i-u)*c+p); // line height is calculated here



  }
  // draw player
  fill("#f33a");
  ellipse(l,y+l,z,z);


  // check for game over:

  loadPixels();
  for(i=0; i<1600000; i+=4){
    // if we find this green value anywhere while game is running
    if(pixels[i]>205) g = true; // then game is over
  }
  }


  // while game isn't running:
  else{
    // format game over text:
  t="score: "+t+". hit R";

  // reset game on key press
     if(k&&key=='r'){
       g = !g;
       x=0;
       y=0;
       s=random(c);
     }
  }

fill(c);
  // display text (whether game running or not)
  text(t,20,20);
}



*/
