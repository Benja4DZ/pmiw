let pantalla = 'inicio';

let vidas = 3
  let puntaje = 0;
let mejorPuntaje = 0;

let enemigos;
let tiempoDeEspera = 1000;

let bX, bY, bW, bH;
let btnInstruc, btnCreditos, btnJugar, btnReiniciar;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
}


function draw() {
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

function mouseClicked() {
  if (pantalla==='inicio') {
    pantalla = 'instrucciones';
  } else if (pantalla==='creditos') {
    pantalla = 'inicio';
  } else if (pantalla==='instrucciones') {
    pantalla = 'juego';
  } else if (pantalla==='juego') {
    pantalla = 'reseteo';
  } else if (pantalla==='reseteo') {
    pantalla = 'inicio';
  }
}

function dibuInicio() {
  background(0, 0, 255);
  text("Inicio", width/2, height/2);
}

function dibuCreditos() {
  background(0, 0, 150);
  text("Créditos", width/2, height/2);
}

function dibuInstru() {
  background(0, 150, 0);
  text("Instrucciones", width/2, height/2);
}

function dibuJuego() {
  background(0, 255, 0);
  text("Juego", width/2, height/2);
}

function dibuReset() {
  background(150, 0, 0);
  text("Reseteo", width/2, height/2);
}
