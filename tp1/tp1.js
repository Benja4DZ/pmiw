/* Benjamín Higuera Berizonce - 126989/1 - Comisión 3 */

let idle = [];
let shoot_ink = [];
let indice = 0;
let velSprites = 5;

function setup() {
  for (i=0; i<4; i++) {
    idle[i] = loadImage("data/DrZ/idle/idle_"+nf(i, 4)+".png");
  }
  for (i=0; i<19; i++) {
    shoot_ink[i] = loadImage("data/DrZ/shoot_ink/frame_"+nf(i, 4)+".png");
  }


  createCanvas(800, 600);
}


function draw() {
  background(255, 0, 0);

  if (frameCount % velSprites === 0) {
    indice= (indice+1) % shoot_ink.length;
  }
  imageMode(CENTER);
  image(shoot_ink[indice], 400, 300);
}
