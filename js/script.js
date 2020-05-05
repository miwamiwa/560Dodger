/*
554 characters

let s,i,u,k,m,p,f,t,x=0,y=0,c=180,g=!0,l=250,z=50;function setup(){createCanvas(800,500),noStroke()}function draw(){if(background(c),k=keyIsPressed,t=x,g)t=x+". hit R",k&&"r"==key&&(g=!g,x=0,y=0,s=random(c));else{for(k&&("s"==key&&(y+=6),"w"==key&&(y-=6)),y+=2,x+=7,i=0;i<8;i++)m=i*c-x%c,p=x/l,u=floor((-x-1)/c),f=q(2),fill(0,z),rect(m,f,c,350-p),6-i<x/c&&(fill(c),rect(m,f+2*q(1),9+p,.7*q(0)+p));for(fill("#c338"),ellipse(l,y+l,z,z),loadPixels(),i=0;i<16e5;i+=4)pixels[i]>c+1&&(g=!0)}fill(z),text(t,z,z)}function q(e){return noiseSeed(s+e),noise(i-u)*c}

*/

let x=0;  // obstacles x displacement
let y=0; // player y coordinate
let c=180; // distance between obstacles, and also just the value 180
let s; // noise seed
let g = true; // game over
let i; // a variable for my for() loops
let l=250; // half canvas height... but also just the value 250
let z=50; // ellipse radius
let u; // noise index relative to player's displacement
let k; // key is pressed
let m; // screen section x coordinate
let p; // scaling factor
let f; // cave ceiling
let t;
// setup()
// creates drawing area
function setup(){
  createCanvas(800,500);
  noStroke();
}

// draw()
// is the game loop
function draw(){

  // draw background
  background(c);
  k=keyIsPressed; // this is better than writing keyIsPressed twice
  t=x;
  // if game is running
  if(!g){

    // ********* player update:

    // check key inputs
    if(k){
      if(key=='s') y+=6;
      if(key=='w') y-=6;
    }
    // make player fall
    y+=2;


    // ********* platforms & background update:

    // move everything over to the left
    x+=7;

    // divide screen width into 8 sections
    for(i=0; i<8; i++){

      m=i*c-x%c;  // section X coordinate
      p=x/l; // scaling factor (platforms get larger and cave gets more narrow)
      u=floor((-x-1)/c); // u gives me the noise index for this part of the screen when subtracted from i
      f=q(2); // cave insides' distance from the top of the canvas

      // ********* draw cave inside:
      fill(0,z);
      // ( cave gets smaller as the game unfolds )
      rect( m, f, c, 350-p );

      // ********* draw platform:

      // if this is one of the first 6 platforms, don't draw the friggen platform
      if(6-i<x/c){
        fill(c);
        rect(m,f+q(1)*2,9+p,q(0)*0.7+p);
      }
    }


    // ********* draw player
    fill("#c338");
    ellipse(l,y+l,z,z);


    // ********* check for game over:

    // load pixels
    loadPixels();

    for(i=0; i<1600000; i+=4)
    // if we find a red value anywhere that exceeds the background color,
    // then the player overlapped something and game is over.
    if(pixels[i]>c+1) g = true;

  }


  // ********* while game isn't running:
  else{

    // add reset instructions to score text
    t=x+". hit R";

    // reset game on key press
    if(k&&key=='r'){
      g = !g; // gameover is false
      x=0; // reset obstacle spawn offset
      y=0; // reset player position
      s=random(c); // pick a new noise seed to start from
    }
  }

  // ********* display score || reset text (running or not)
  fill(z);
  text(t,z,z);
}

// q()
//
// set the noise seed and returns the noise value at a previously specified index
function q(h){
  noiseSeed(s+h);
  return noise(i-u)*c;
}
