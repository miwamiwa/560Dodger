/*
551 characters

let x=0,y=0,r=0,g=!1,c=180,l=250,v=0,p=i=>pixels[i]>c,a=(e,l,r)=>{fill(o),rect(i*c-x%c,q(2)+r,e,l)},q=i=>noise(u+i*i)*c,k=i=>keyIsPressed&&key==i;function setup(){createCanvas(800,500)}function draw(){if(!g){for(background(c),k("s")&&v<6&&v++,k("w")&&v>-8&&v--,v<0&&(v+=.3),y+=v+2,z=40,x+=7,i=0;i<8;i++)u=i-floor((-x-1)/c),o=9,a(c,350-x/l,0),text(x,9,9),6-i<x/c&&(o=c,u%8>6&&(o="#5a5",r>x&&(o=0,z=20)),a(9,.8*q(0),1.5*q(1)));for(fill("#bc18"),rect(l,y+l,z,z,l),loadPixels(),i=0;i<16e5;i+=4)p(i)&&(g=!0),p(i+1)&&(r=x+5*c)}k("r")&&(y=0,g=0,x=0,r=0,v=0)}
*/

let x=0;  // obstacles x displacement
let y=0; // player y coordinate
let r=0; // buff end time
let g=false; // game over
let c=180; // distance between obstacles
let l=250; // a value that comes up a few times
let v=0; // velocity


// p()
// verifies if a given value in the pixels[] array exceeds 180
let p=(b)=> (pixels[b]>c);

// a()
// draws a filled rectangle
let a=(b,d,f)=>{
  fill(o);
  rect( i*c-x%c, q(2)+f, b,d );
}

// q()
// get a noise value at index u, the starting value being h*h
let q=(h)=> noise(u+h*h)*c;


// k()
// check if key is pressed and matches input
let k=(j)=>(keyIsPressed&&key==j);

// setup()
// creates drawing area
function setup(){
  createCanvas(800,500);
}

// draw()
// is the game loop
function draw(){

  // if game is running
  if(!g){

  background(c);

    z=40; // player size

    // check key inputs & update velocity
    if(k('s')&&v<6) v+=0.8;
    if(k('w')&&v>-8) v-=1.2;

    if(v<0)  v+=.3; //decelerate if moving up
    y+=v +2; // update player y and make them fall

    x+=7; // move decor over to the left


    // divide screen width into 8 sections
    for(i=0; i<8; i++){

      // calculate noise index for this part of the screen
      u=i-floor((-x-1)/c);

      // cave insides:

      o=9; // set rectangle fill
      a( c, 350-x/l,0 ); // draw rectangle

      text(x,9,9);  // draw score

      // platforms:

      // don't draw first few platforms
      if(6-i<x/c){

        o=c; // set platform fill

        if(u%8>6){ // every now and then

          o="#5a5"; // set platform fill to green

          if(r>x){ // if buff is active
            o=0; // platform fill is black
            z=20; // player size is small
          }
        }

      a( 9,q(0)*0.6,q(1)*1.5); // draw platform
      }
    }

    // draw player
    fill("#bc18");
    rect(l,y+l,z,z,l);


    // collision:

    // load pixels
    loadPixels();

    // look through pixels:
    for(i=0; i<1600000; i+=4){
      if(p(i)) g = !0; // red overlap: game is over
      if(p(i+1)) r=x+c*5; // green overlap: set buff duration (buff is active)
    }
  }

  // press r at any time to restart this level
 if(k('r')){
    y=0;
    g=0;
    x=0;
    r=0;
    v=0;
  }

}
