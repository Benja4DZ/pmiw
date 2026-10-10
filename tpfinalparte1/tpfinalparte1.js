// ================== IMÁGENES ==================
const Img = {};   // Img["escena001.jpg"], Img["globo1.png"], Img["001.png"], etc.
let imgAdvertencia, imgCreditos, imgMapa, imgReset;

function cargar(carpeta, archivo) {
  Img[archivo] = loadImage("data/" + carpeta + "/" + archivo);
}

function preload() {
  for (let i = 1; i <= 18; i++) {
    cargar("escenarios", "escena" + nf(i, 3) + ".jpg");
  }
  for (let i = 1; i <= 3; i++) cargar("globos", "globo" + i + ".png");
  for (let i = 1; i <= 3; i++) cargar("finales", "final" + i + ".jpg");
  for (let i = 1; i <= 9; i++) cargar("opciones", nf(i, 3) + ".png");

  imgAdvertencia = loadImage("data/advertencia.jpg");
  imgCreditos    = loadImage("data/Creditos.jpg");
  imgMapa        = loadImage("data/mapa.png");
  imgReset       = loadImage("data/reset.jpg");
}

// ================== ESTADO ==================
let estado = "advertencia";   // advertencia | juego | reset | creditos
let idPantalla = "P1";
let indiceDialogo = 0;
let fondoActual = null;

// ================== AJUSTES DE DISEÑO (tocá estos números) ==================
const BOTON_Y = 120, BOTON_GAP = 40;     // posición/separación de botones de decisión
const BTN_JUGAR    = { x:
250, y:
220, w:
300, h:
60 };  // áreas sobre reset.jpg
const BTN_CREDITOS = { x:
250, y:
300, w:
300, h:
60 };

// ================== SETUP / DRAW ==================
function setup() {
  createCanvas(800, 450);
  textSize(15);
  irA("P1");          // deja listo el fondo inicial
}

function draw() {
  background(0);
  if (estado === "advertencia") {
    dibujarImg(imgAdvertencia, 0, 0, width, height);
  } else if (estado === "juego") {
    dibujarJuego();
  } else if (estado === "reset") {
    dibujarImg(imgReset, 0, 0, width, height);
  } else if (estado === "creditos") {
    dibujarImg(imgCreditos, 0, 0, width, height);
  }
  actualizarCursor();
}

// ================== DIBUJO ==================
function dibujarJuego() {
  const nodo = Pantallas[idPantalla];
  const linea = nodo.dialogos[indiceDialogo];

  // Fondo
  dibujarImg(Img[fondoActual], 0, 0, width, height);

  // Globo (cambia según quién habla)
  const g = areaGlobo();
  dibujarImg(Img[linea.globo], g.x, g.y, g.w, g.h);
  //rect(285,325,410,120); //tamaño de caja de texto

  // Texto
  fill(255);
  textSize(15);
  text(linea.texto, g.x, g.y);

  // Botones de decisión (solo en el último diálogo del nodo)
  if (hayOpciones()) {
    for (let b of botonesOpciones()) {
      if (dentro(b, mouseX, mouseY)) tint(200);
      else noTint();
      dibujarImg(b.img, b.x, b.y, b.w, b.h);
    }
    noTint();
  }
}

// Dibuja una imagen; si falta, muestra un rectángulo gris y avisa en consola
function dibujarImg(img, x, y, w, h) {
  if (img) {
    image(img, x, y, w, h);
  } else {
    fill(80);
    noStroke();
    rect(x, y, w, h);
    console.warn("Falta una imagen (revisá los nombres de archivo)");
  }
}

// ================== ÁREAS CLICKEABLES ==================
// El globo se dibuja a su tamaño original, centrado abajo.
  //rect(285,325,410,120); //tamaño de caja de texto
function areaGlobo() {
  const linea = Pantallas[idPantalla].dialogos[indiceDialogo];
  const img = Img[linea.globo];
  const w = img ? img.width : 700;
  const h = img ? img.height : 150;
  return {
  x:
    (width - w) / 2, y:
  height - h, w:
  w, h:
    h
  };
}

// Dos botones lado a lado, centrados, a su tamaño original.
function botonesOpciones() {
  const ops = Pantallas[idPantalla].opciones;
  const imgs = ops.map(o => Img[o.boton]);
  const ws = imgs.map(im => im ? im.width : 200);
  const hs = imgs.map(im => im ? im.height : 60);
  const total = ws[0] + ws[1] + BOTON_GAP;
  let x = (width - total) / 2;
  const res = [];
  for (let i = 0; i < 2; i++) {
    res.push( {
    x:
    x, y:
    BOTON_Y, w:
    ws[i], h:
    hs[i], img:
    imgs[i], destino:
      ops[i].destino
    }
    );
    x += ws[i] + BOTON_GAP;
  }
  return res;
}

function dentro(r, mx, my) {
  return mx > r.x && mx < r.x + r.w && my > r.y && my < r.y + r.h;
}

function hayOpciones() {
  const nodo = Pantallas[idPantalla];
  return nodo.opciones && indiceDialogo === nodo.dialogos.length - 1;
}

function actualizarCursor() {
  let sobre = false;
  if (estado === "advertencia" || estado === "creditos") sobre = true;
  else if (estado === "reset") sobre = dentro(BTN_JUGAR, mouseX, mouseY) || dentro(BTN_CREDITOS, mouseX, mouseY);
  else if (estado === "juego") {
    sobre = hayOpciones()
      ? botonesOpciones().some(b => dentro(b, mouseX, mouseY))
      : dentro(areaGlobo(), mouseX, mouseY);
  }
  cursor(sobre ? HAND : ARROW);
}

// ================== LÓGICA ==================
function irA(id) {
  if (!Pantallas[id]) {
    console.error("No existe la pantalla: " + id);
    return;
  }
  idPantalla = id;
  indiceDialogo = 0;
  if (Pantallas[id].escena) fondoActual = Pantallas[id].escena;  // sin "escena" => conserva el fondo
}

function avanzar() {
  const nodo = Pantallas[idPantalla];
  if (indiceDialogo < nodo.dialogos.length - 1) {
    indiceDialogo++;
  } else if (nodo.siguiente === "RESET") {
    estado = "reset";
  } else if (nodo.siguiente) {
    irA(nodo.siguiente);
  }
  // si tiene "opciones", no hace nada: hay que elegir un botón
}

function reiniciar() {
  irA("P1");
  estado = "juego";
}

// ================== INPUT ==================
function mousePressed() {
  if (estado === "advertencia") {
    reiniciar();                                   // click en cualquier lado
  } else if (estado === "juego") {
    if (hayOpciones()) {
      for (let b of botonesOpciones()) {
        if (dentro(b, mouseX, mouseY)) {
          irA(b.destino);
          return;
        }
      }
    } else if (dentro(areaGlobo(), mouseX, mouseY)) {
      avanzar();                                   // solo avanza clickeando el globo
    }
  } else if (estado === "reset") {
    if (dentro(BTN_JUGAR, mouseX, mouseY))         reiniciar();
    else if (dentro(BTN_CREDITOS, mouseX, mouseY)) estado = "creditos";
  } else if (estado === "creditos") {
    estado = "reset";                              // click para volver
  }
}

/*
let Escenarios = [];
 let Globos = [];
 let Finales = [];
 let Opciones = [];
 let imgAdvertencia, imgCreditos, imgMapa, imgReset;
 
 //function preload() {
 //  for (let i = 1; i <= 18; i++) {
 //    let numero = nf(i, 3); // Convierte 1 en "001", 10 en "010", etc.
 //    let prefijo = (i >= 15) ? "escenario" : "escena"; // Contempla el cambio de nombre[cite: 8]
 //    Escenarios[i - 1] = loadImage("data/escenarios/" + prefijo + numero + ".jpg");
 //  }
 //  for (let i = 1; i <= 3; i++) {
 //    Globos[i - 1] = loadImage("data/globos/globo" + i + ".png");
 //  }
 //  for (let i = 1; i <= 3; i++) {
 //    Finales[i - 1] = loadImage("data/finales/final" + i + ".jpg");
 //  }
 //  for (let i = 1; i <= 9; i++) {
 //    let numero = nf(i, 3);
 //    Opciones[i - 1] = loadImage("data/opciones/" + numero + ".png");
 //  }
 
 //const Img = {};   // Img["escena001.jpg"], Img["globo1.png"], Img["001.png"], etc.
 
 //function cargar(carpeta, archivo) {
 //  Img[archivo] = loadImage("data/" + carpeta + "/" + archivo);
 //}
 
 function preload() {
 for (let i = 1; i <= 19; i++) {Escenarios[i - 1] = loadImage("data/escenarios/escena" + nf(i, 3) + ".jpg");}
 for (let i = 1; i <= 3; i++) {Globos[i - 1] = loadImage("data/globos/globo" + i + ".png");}
 for (let i = 1; i <= 3; i++) {Finales[i - 1] = loadImage("data/finales/final" + i + ".jpg");}
 for (let i = 1; i <= 9; i++) {Opciones[i - 1] = loadImage("data/opciones/" + nf(i, 3) + ".png");}
 
 imgAdvertencia = loadImage("data/advertencia.jpg");
 imgCreditos    = loadImage("data/Creditos.jpg");
 imgMapa        = loadImage("data/mapa.png");
 imgReset       = loadImage("data/reset.jpg");
 }
 
 //-----------------------------------------------------------------------------------------------------------------------------
 
 function setup() {
 createCanvas(800, 450);
 console.log("¡Precarga terminada!");
 
 textSize(15);
 fill(255);
 }
 
 //-----------------------------------------------------------------------------------------------------------------------------
 
 //rect(285,325,410,120); //tamaño de caja de texto
 */

/*
  background(30);
 fill(255);
 textSize(16);
 
 if (Escenarios[0]) {
 image(Escenarios[0], 20, 20, 160, 120);
 text("Escenarios OK", 20, 160);
 }
 
 if (Globos[0]) {
 image(Globos[0], 200, 20, 160, 120);
 text("Globos OK", 200, 160);
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
 */


/*
  Órden
 image(imgAdvertencia, 0, 0, width, height);
 
 //Escena Diario
 image(Escenarios[0], 0, 0, width, height);
 image(Globos[2], 0, 210, width, height-100);
 
 text("Un día como cualquier otro, Mike se pone a leer el diario\ntranquilamente hasta que encuentra un anuncio en\nbúsqueda de nuevo personal para la reapertura de la\nantigua pizzería de su infancia.", 300, 350);
 //evento mouseClicked, quizás hacer ese array capaz de guardar Strings (el diccionario)
 text("Mike se contacta con el número y se le informa que\ntrabajaría como guardia nocturno de 12 a 6 a.m. Mike\nduda por un momento, pero termina aceptando el puesto.", 300, 350);
 
 //Escena Televisión
 image(Escenarios[3], 0, 0, width, height);
 image(Globos[0], 0, 210, width, height-100);
 text("¡Aún no puedo creer que vaya a trabajar en Freddy\nFazbear's Pizza! Ese lugar me trae tantos buenos\nrecuerdos.", 300, 350);
 text("Los cumpleaños de mis amigos, la sala de arcade, la\nbuena pizza... ¡y los animatrónicos! ¿Cómo no\nextrañarlos? Freddy el oso, Bonnie el conejo, Chica la\ngallina...", 300, 350);
 text("De tanto pensar en la pizzería me está dando hambre,\nvoy a ver qué hay en la heladera así morfo algo mientras\ntermino de verme esta serie.", 300, 350);
 
 NARRADOR
 text("Al joven Mike se le pasó la tarde volando viendo la tele.", 300, 350);
 
 text("¿¡Cómo vas a terminar el episodio así!? Me urge ver\ncómo sigue, no me puedo quedar con la duda... Igual,\nme estoy cayendo del sueño, no sé cómo haré en el\ntrabajo...", 300, 350);
 text("Uh, ya son casi las 11, debería estar preparándome...\npero qué fiaca.", 300, 350);
 
 OPCIÓN 1: Trabajar
 text("Bueno, toca hacerlo, así es la vida.", 300, 350);
 OPCIÓN 2: Ver tele
 text("...Un episodio más no le hará daño a nadie.", 300, 350);
 
 ESCENA AFUERA DE PIZZERÍA
 text("Se ve... más tétrica de lo que recordaba... probablemente\npor la hora y la falta de luz.", 300, 350);
 text("Vos podés Mike, solo entrá y avanzá hasta la sala de\nseguridad. Decí que me pasaron un mapa del lugar y de\npaso me traje una linterna.", 300, 350);
 
 ESCENA OFICINA (VACÍA)
 text("Debe ser acá. Con razón me pasaron un mapa, este\nlugar es enorme. Y no parece haber nadie... No sé si\nsorprenderme, por algo pedían staff nocturno.", 300, 350);
 
 PHONE GUY
 text("¿Hola? ¿Hola? ¿Se escucha? Bueno, espero que sí.\n¿Qué tal, empleado? Este es un mensaje pregrabado\npara los próximos guardias de seguridad.", 300, 350);
 text("Mirá, no me pagan por esto, y por el bien de mi salud\nmental no pienso seguir en este puesto, pero pensaba\ndejar esta mini ayuda para quien le sirva.", 300, 350);
 text("Desde mi experiencia, lo que más te van a servir serán el\nmini televisor en tu escritorio para ver las cámaras y la\nmáscara de oso debajo de la silla. Arrancá yendo a la\ncámara 7.", 300, 350);
 
 ESCENA CÁMARA STAGE (CON 3 ANIMATRÓNICOS)
 MIKE
 text("¡Dios mío, pero qué cambiados están! La reapertura vino\ncon nuevas caras.", 300, 350);
 PHONE GUY
 text("Deberías estar viendo el escenario con los\nanimatrónicos si es que no cambiaron las cámaras.\nEchales un ojo siempre que puedas. Si vas a revisarlos\nen persona, ponete la máscara de oso, vos haceme\ncaso. Pasá a la cámara 9.", 300, 350);
 
 ESCENA CÁMARA SALA DE PREMIOS (SIN PUPPET)
 PHONE GUY
 text("Esa es la sala de premios. Lo importante acá es esa\nenorme caja musical. Cada que accedas a esta cámara\npodrás ver un opción para darle cuerda a la caja. Hacelo.\nConstantemente. O te arrepentirás.", 300, 350);
 text("Eso es todo, prácticamente. Por supuesto que hay otras\ncámaras pero no son realmente útiles a menos que\nentren a robar. Seguro estés lleno de preguntas, pero ya\nirás agarrándole la mano. ¡Suerte, la necesitarás!", 300, 350);
 MIKE
 text("...Qué tipo más raro, no tuvo ningún sentido todo lo que\nme dijo... Bueno, quiero volver a ver los nuevos\nanimatrónicos.", 300, 350);
 
 ESCENA CÁMARA STAGE (SOLO ESTÁ FREDDY)
 */
