/*
554 characters

let s,i,u,k,m,p,f,t,x=0,y=0,c=180,g=!0,l=250,z=50;function setup(){createCanvas(800,500),noStroke()}function draw(){if(background(c),k=keyIsPressed,t=x,g)t=x+". hit R",k&&"r"==key&&(g=!g,x=0,y=0,s=random(c));else{for(k&&("s"==key&&(y+=6),"w"==key&&(y-=6)),y+=2,x+=7,i=0;i<8;i++)m=i*c-x%c,p=x/l,u=floor((-x-1)/c),f=q(2),fill(0,z),rect(m,f,c,350-p),6-i<x/c&&(fill(c),rect(m,f+2*q(1),9+p,.7*q(0)+p));for(fill("#c338"),ellipse(l,y+l,z,z),loadPixels(),i=0;i<16e5;i+=4)pixels[i]>c+1&&(g=!0)}fill(z),text(t,z,z)}function q(e){return noiseSeed(s+e),noise(i-u)*c}

*/

let x=0;  // obstacles x displacement
let y=0; // player y coordinate
let r=0;
let g=false;
let c=180; // distance between obstacles, and also just the value 180
let l=250; // half canvas height... but also just the value 250
let z; // ellipse radius
let u; // noise index relative to player's displacement
//let k; // key is pressed

let v=0;
let p=(b)=> (pixels[b]>c);




// a() draws a rectangle
let a=(b,d,f)=>{
  fill(o);
  rect( i*c-x%c, q(2)+f, b,d );
}

// q()
//
// set the noise seed and returns the noise value at a previously specified index
let q=(h)=>{
  noiseSeed(h);
  return noise(u)*c;
}


let k=(j)=>(keyIsPressed&&key==j);

// setup()
// creates drawing area
function setup(){
  createCanvas(800,500);
}



// draw()
// is the game loop
function draw(){

  if(!g){

  background(c);
    // ********* player update:

    // check key inputs
    if(k('s')&&v<6) v++;
    if(k('w')&&v>-8) v--;
    if(v<0)  v+=.3; //decelerate after moving up

    // update player y and make them fall
    y+=v +2;

    // ********* platforms & background update:
    z=40; // player size
    // move everything over to the left
    x+=7;


    // divide screen width into 8 sections
    for(i=0; i<8; i++){

      u=i-floor((-x-1)/c);
      o=9;
      // ********* draw cave inside:
      a( c, 350-x/l,0 );
      // draw score
        text(x,9,9);
      // ********* draw platform:

      // if this is one of the first 6 platforms, don't draw the friggen platform
      if(6-i<x/c){

        o=c;

        if(u%8>6){

          o="#5a5";

          if(r>x){
            o=0;
            z=20;
          }
        }

      a( 9,q(0),q(1)*2);
      }
    }



    // ********* draw player
    fill("#bc18");
    rect(l,y+l,z,z,l);


    // ********* check for game over:

    // load pixels
    loadPixels();
  //  p=pixels;
    for(i=0; i<1600000; i+=4){
      if(p(i)) g = !0;
      if(p(i+1)) r=x+c*3;
    }
    // if we find a red value anywhere that exceeds the background color,
    // then the player overlapped something and game is over.

  }

  if(k('r')){
    y=0; g=0; x=0; r=0;
  }

}
