let Escenarios = [];
let Dialogos = [];
let Finales = [];
let Opciones = [];
let imgAdvertencia, imgCreditos, imgMapa, imgMascara, imgReset;
let musicaFinales;
let Musica = [];
let pantalla = "ADVERTENCIA";
//-----------------------------------------------------------------------------------------------------------------------------
let lineaDialogo = 0;
let textosEscena1 = [
  "NARRADOR: Un día como cualquier otro, Mike se pone a leer el diario tranquilamente hasta que encuentra un anuncio en búsqueda de nuevo personal para la reapertura de una pizzería que se daría ese mismo día./la antigua pizzería de su infancia...",
  "NARRADOR: Mike se contacta con el número y se le informa que trabajaría como guardia nocturno de 12 a 6 a.m. Mike duda por un momento, pero termina aceptando el puesto...",
  "NARRADOR: Al poco tiempo decide tomarse una siesta por la tarde para así poder soportar hasta las 6 a.m"
  ]

//carga de imagenes

function preload() {
  for (let i = 1; i <= 16; i++) {
    let numero = nf(i, 3); 
    let prefijo = (i >= 13) ? "escenario" : "escena";
    Escenarios[i - 1] = loadImage("data/escenarios/" + prefijo + numero + ".jpg");
  }
  for (let i = 1; i <= 3; i++) {
    Dialogos[i - 1] = loadImage("data/dialogos/dialogo" + i + ".png");
  }
  for (let i = 1; i <= 3; i++) {
    Finales[i - 1] = loadImage("data/finales/final" + i + ".jpg");
  }
  for (let i = 1; i <= 9; i++) {
    let numero = nf(i, 3);
    Opciones[i - 1] = loadImage("data/opciones/" + numero + ".png");
  }
  
  imgAdvertencia = loadImage("data/advertencia.jpg");
  imgCreditos    = loadImage("data/Creditos.jpg");
  imgMapa        = loadImage("data/mapa.png");
  imgMascara     = loadImage("data/mascara.png");
  imgReset       = loadImage("data/reset.jpg");

//carga de musica

 for (let i = 1; i <= 4; i++) {
    Musica[i - 1] = loadSound("data/musica/" + i + ".mp3");
  }
  musicaFinales = loadSound("data/musica/musicafinales.mp3");
}

//-----------------------------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(800, 450);
}

//-----------------------------------------------------------------------------------------------------------------------------

function draw() {
 background(0);
 if (pantalla === "ADVERTENCIA") {
    image(imgAdvertencia, 0, 0, width, height);

//un texto que parpadea para que el usuario sepa que debe hacer click

 if (frameCount % 60 < 30) {
      fill(255);
      textAlign(CENTER);
      textSize(20);
      text("Haz clic en la pantalla para continuar", width / 2, height - 30);
   }
   
//-----------------------------------------------------------------------------------------------------------------------------
   
} else if (pantalla === "ESCENA_01") {
    image(Escenarios[0], 0, 0, width, height);
    image(Dialogos[2], -120, 130, 1000, 450);
    fill(255);
    textAlign(LEFT, TOP);
    textSize(18);
    text(textosEscena1[lineaDialogo], 245, 290, 500);

//-----------------------------------------------------------------------------------------------------------------------------

} else if (pantalla === "ESCENA_02") {
  background(30);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Aquí irá la escena 2...", width / 2, height / 2);
  }
}

//-----------------------------------------------------------------------------------------------------------------------------

function mousePressed() {

  if (pantalla === "ADVERTENCIA") {
    pantalla = "ESCENA_01";
      userStartAudio();
    if (Musica[0] && Musica[0].isLoaded()) { 
  if (!Musica[0].isPlaying()) {
    Musica[0].setVolume(0.5);
    Musica[0].loop();
  }
} else {
  console.log("El audio 1 no cargó o falta la librería p5.sound."); 
}
    
  } else if (pantalla === "ESCENA_01") {
    if (lineaDialogo < textosEscena1.length - 1) { // Asegúrate de que aquí haya un 1
      lineaDialogo++;
    } else {
      pantalla = "ESCENA_02";
      lineaDialogo = 0;
    }
  }
}
