/* Benjamín Higuera Berizonce - 126989/1 - Comisión 3 */

let objJuego;

let fondo = [];
let imgMalo = [];
let imgBueno = [];

let audioAparece;

let pantalla = 'inicio';

let bW = 200, bH = 50, bX = 800/2-bW/2, bY = 300;
let bYJugar = bY-100;

function preload() {
  for (let i=0; i<4; i++) {
    fondo[i] = loadImage("data/"+nf(i, 2)+".jpg");
  }
  for (let i=0; i<3; i++) {
    imgMalo[i] = loadImage("data/malo"+nf(i, 2)+".png");
    imgBueno[i] = loadImage("data/bueno"+nf(i, 2)+".png");
  }
  audioAparece = loadSound("data/aparece.mp3");
}

function setup() {
  createCanvas(800, 400);
  objJuego = new Juego();
  textAlign(CENTER);
  textSize(20);
  fill(255);
}


function draw() {
  //print(millis());
  background(255, 0, 0);
  text("ERROR DE CARGA", width/2, height/2);

  //Máquina de estados
  if (pantalla==='inicio') {
    dibuInicio();
  } else if (pantalla==='creditos') {
    dibuCreditos();
  } else if (pantalla==='instrucciones') {
    dibuInstru();
  } else if (pantalla==='juego') {
    dibuJuego();
  } else if (pantalla==='reseteo') {
    dibuReset();
  }
}

function keyPressed() {
  if (pantalla === 'juego') {
    objJuego.teclaPresionada(key, keyCode);
  }
}

function mouseClicked() {
  if (pantalla==='inicio' && mouseX>bX && mouseY>bYJugar && mouseX<bX+bW && mouseY<bYJugar+bH) {
    pantalla = 'instrucciones';
  } else if (pantalla==='inicio' && mouseX>bX && mouseY>bY && mouseX<bX+bW && mouseY<bY+bH) {
    pantalla = 'creditos';
  } else if (pantalla==='creditos' && mouseX>bX && mouseY>bY && mouseX<bX+bW && mouseY<bY+bH) {
    pantalla = 'inicio';
  } else if (pantalla==='instrucciones' && mouseX>bX && mouseY>bY && mouseX<bX+bW && mouseY<bY+bH) {
    pantalla = 'juego';
    objJuego.reiniciar();
  } else if (pantalla==='reseteo' && mouseX>bX && mouseY>bY && mouseX<bX+bW && mouseY<bY+bH) {
    pantalla = 'inicio';
  }
}

function dibuBoton(texto_, bY_) {
  //Efecto hover
  let colorBoton, colorTexto;
  if (mouseX>bX && mouseY>bY_ && mouseX<bX+bW && mouseY<bY_+bH) {
    colorBoton = 255;
    colorTexto = 0;
  } else {
    colorBoton = 0;
    colorTexto = 255;
  }

  //Estructura
  push();
  stroke(255);
  fill(colorBoton);
  rect(bX, bY_, bW, bH, 10);
  fill(colorTexto);
  textAlign(CENTER, CENTER);
  text(texto_, width/2, bY_+bH/2);
  pop();
}

function titulo(texto_) {
  push();
  textSize(40);
  text(texto_, width/2, 60);
  pop();
}

function cartel(color_, transp_) {
  push();
  fill(color_, transp_);
  rect(100, 75, 600, 250, 50);
  pop();
}

function dibuInicio() {
  image(fondo[0], 0, 0, width, height);
  push();
  textSize(70);
  text("¡Alumbrá, Mike!", width/2, height/3);
  pop();

  //BOTONES
  dibuBoton("JUGAR", bYJugar);
  dibuBoton("CRÉDITOS", bY);
}

function dibuCreditos() {
  image(fondo[3], 0, 0);
  cartel(255, 50);
  titulo("Créditos");
  text("Benjamín Higuera Berizonce - 126989/1\n\nPMIW - Comisión 3 - David Bedoian\n\n*Personajes y escenarios originarios de la saga de videojuegos\nFive Nights At Freddy's por el desarrollador Scott Cawthon*", width/2, 125);
  dibuBoton("VOLVER", bY);
}

function dibuInstru() {
  image(fondo[1], 0, 0, width, height);
  cartel(0, 200);
  titulo("Instrucciones");
  text("¡Todos los animatrónicos del local se activaron repentinamente! Espantá a los modelos viejos y destrozados con la tecla ESPACIO antes de que te ataquen, pero tené cuidado de no ahuyentar por accidente a los modelos nuevos.", 150, 125, 500);
  dibuBoton("INICIAR", bY);
}

function dibuJuego() {
  image(fondo[2], -100, -20);
  objJuego.dibujar();
}

function dibuReset() {
  image(fondo[3], 0, 0);
  cartel(50, 200);
  titulo("Resultados");
  text(objJuego.resultado+"\n\n• Vidas Restantes: "+objJuego.vidas+" •\n\n• Tu Puntaje: "+objJuego.puntaje+" •", width/2, 150);
  dibuBoton("REINICIAR", bY);
}
