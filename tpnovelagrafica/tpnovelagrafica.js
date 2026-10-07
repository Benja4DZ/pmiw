let Escenarios = [];
let Dialogos = [];
let Finales = [];
let Opciones = [];
let imgAdvertencia, imgCreditos, imgMapa, imgMascara, imgReset;


function preload() {
  for (let i = 1; i <= 18; i++) {
    let numero = nf(i, 3); // Convierte 1 en "001", 10 en "010", etc.
    let prefijo = (i >= 15) ? "escenario" : "escena"; // Contempla el cambio de nombre[cite: 8]
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
  imgCreditos    = loadImage("data/Creditos.jpg"); // Respeta la mayúscula inicial[cite: 11]
  imgMapa        = loadImage("data/mapa.png");
  imgMascara     = loadImage("data/mascara.png");
  imgReset       = loadImage("data/reset.jpg");
}

//-----------------------------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(1000, 400);
  console.log("¡Precarga terminada!");
}

//-----------------------------------------------------------------------------------------------------------------------------

function draw() {
  background(30);
  fill(255);
  textSize(16);

  if (Escenarios[0]) {
    image(Escenarios[0], 20, 20, 160, 120);
    text("Escenarios OK", 20, 160);
  }

  if (Dialogos[0]) {
    image(Dialogos[0], 200, 20, 160, 120);
    text("Diálogos OK", 200, 160);
  }

  if (Finales[0]) {
    image(Finales[0], 380, 20, 160, 120);
    text("Finales OK", 380, 160);
  }

  if (Opciones[0]) {
    image(Opciones[0], 560, 20, 160, 120);
    text("Opciones OK", 560, 160);
  }

  // Verificamos una de las imágenes sueltas
  if (imgCreditos) {
    image(imgCreditos, 740, 20, 160, 120);
    text("Sueltas OK", 740, 160);
  }

  text("Si ves los 5 recuadros arriba, todas las carpetas están funcionando.", 20, 220);
}
