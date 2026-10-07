let Escenarios=[];
let Dialogos=[];
let Finales=[];
let Advertencia,Mapa,Mascara,Reset;
function preload() {
  for (let i = 1; i <= 15; i++) {
    let numero = nf(i, 3);
    let prefijo = (i >= 15) ? "escenario" : "escena"; 
    Escenarios[i - 1] = loadImage("data/escenarios/" + prefijo + numero + ".jpg");
  }
  for (let i = 1; i <= 3; i++) {
    Dialogos[i - 1] = loadImage("data/dialogos/dialogo" + i + ".png");
  }
  for (let i = 1; i <= 3; i++) {
    Finales[i - 1] = loadImage("data/finales/final" + i + ".jpg");
  }
  Advertencia = loadImage("data/advertencia.jpg");
  Mapa = loadImage("data/mapa.png");
  Mascara = loadImage("data/mascara.png");
  Reset = loadImage("data/reset.jpg");
}

function setup() {
//ESTA RESOLUCION ERA PARA TESTEAR LAS IMAGENES, VOS PONELO EN (800,450);
  createCanvas(1000, 300);
}

function draw() {
  background(255);
//ESTO BORRALO DESPUES ES PARA TESTEAS QUE LAS FOTOS SE SUBIERON CORRECTAMENTE
  if (Escenarios[0]) image(Escenarios[0], 0, 0, 300, 200);
  if (Dialogos[0]) image(Dialogos[0], 310, 0, 300, 200);
  if (Finales[0]) image(Finales[0], 620, 0, 300, 200);
}
