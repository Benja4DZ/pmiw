/* Benjamín Higuera Berizonce - 126989/1 - Comisión 3 */
//VIDEO EXPLICATIVO: https://youtu.be/1aYuxa0Xs4M

let pantalla = 0; //la Pantalla Actual arranca siempre en el Inicio
let musica;

let btnInicioX = 100, btnInicioW = 150, btnInicioH = 50;
let bY = 425, bW = 300, bH = 30;

let Xtexto1 = -300;
let Xtexto2 = 1100;
let Xtexto3 = -300;

//Precarga de escenas
let escena = [];

//ARRAYSSSSS
let texto = [
  //0
  "0",
  "Un día como cualquier otro, Mike se pone a leer el diario tranquilamente hasta que encuentra un anuncio peculiar. La antigua pizzería de su infancia estaba en búsqueda de nuevo personal para su reapertura, que se daría ese mismo día. Mike se contacta con el número y se le informa que trabajaría como guardia nocturno de 12 a 6 a.m. El joven duda por un momento, pero termina aceptando el puesto.",
  "Mike no podría creer que fuera a trabajar en el lugar que le traía tantos buenos recuerdos. Empezó a recordar los cumpleaños de sus amigos, la sala de arcade, la buena pizza... y los queridísimos animatrónicos. Pensar en la pizzería le agarró hambre, así que se puso a comer mientras terminaba de ver su serie. (El joven Mike se tira un maratón de 20 episodios seguidos y se le pasa la tarde volando viendo la tele). “Uh, ya son casi las 11, debería estar preparándome... pero qué fiaca.”",
  "“Se ve... más tétrica de lo que recordaba... probablemente por la hora y la falta de luz... Vos podés Mike, solo entrá y avanzá hasta la sala de seguridad. Decí que me pasaron un mapa del lugar y de paso me traje una linterna.”",
  "“Debe ser acá. Con razón me pasaron un mapa, este lugar es enorme. Y no parece haber nadie... No sé si sorprenderme, por algo pedían staff nocturno.” De repente, el teléfono sonó:\n“¿Hola? ¿Hola? ¿Se escucha?” decía. “¿Qué tal, empleado? Este es un mensaje pregrabado para los próximos guardias de seguridad. Mirá, no me pagan por esto, y por el bien de mi salud mental no pienso seguir en este puesto. Desde mi experiencia, lo que más te van a servir serán el mini televisor en tu escritorio para ver las cámaras y la máscara de oso debajo de la silla. Arrancá yendo a la cámara 7.”",
  //5
  "“¡Dios mío, pero qué cambiados están! La reapertura vino con nuevas caras” dijo el joven Mike.\nEl tipo del teléfono continuó: “Deberías estar viendo el escenario con los animatrónicos si es que no cambiaron las cámaras. Echales un ojo siempre que puedas. Si vas a revisarlos en persona, ponete la máscara de oso, vos haceme caso. Pasá a la cámara 9.”",
  "“Esa es la sala de premios. Lo importante acá es esa enorme caja musical. Cada que accedas a esta cámara podrás ver un opción para darle cuerda a la caja. Hacelo. Constantemente. O te arrepentirás... Eso es todo, prácticamente. Por supuesto que hay otras cámaras pero no son realmente útiles a menos que entren a robar. Seguro estés lleno de preguntas, pero ya irás agarrándole la mano. ¡Suerte, la necesitarás!” Y terminó la grabación. “...Qué tipo más raro, no tuvo ningún sentido todo lo que me dijo... Bueno, quiero volver a ver los nuevos animatrónicos.”",
  "“Pero... ¡¿Qué?! ¡¿Adónde se fueron los otros dos?! ¡¿Acaso entraron a robar?!”\n\nMike escucha ruidos en frente suyo. Desvía sus ojos del mini televisor y enciende su linterna.",
  "“Pero... ¡¿Chica?! ¡¿Qué hace ahí?! ¡¿Desde cuándo pueden moverse de sus posiciones?! ¡Esto es completamente nuevo! ¡Y aterrador!”\n\nSe escuchan ruidos a su derecha. Mike dirige su linterna hacia el conducto de ventilación.",
  "“¡¿Bonnie?! ¡¿Cómo te metiste ahí?! ¡¡Me está viendo fijamente!! La linterna parece que lo dejó inmovilizado, ¡¿pero y ahora qué hago?!”",
  //10
  "Mike siente nervios, tensión y calor con la máscara puesta. Vuelven a sonar ruidos metálicos a su derecha pero Mike se mantiene tembloroso y con los ojos cerrados del miedo.\n\nPasan los minutos y aún no se quita la máscara... Hasta que nuevamente percata sonidos metálicos, pero esta vez de su lado izquierdo.",
  "Mike se siente incapaz de quitarse la máscara a pesar del sudor en su cara por sus nervios, respiración rápida y jadeo. Nuevamente hay ruidos provenientes del conducto izquierdo junto a unas risas de niña. Él se salvó de Chica... Dudándolo un poco, decide sacarse la máscara al no poder soportar el sofocante calor. Mike baja la guardia y descansa por un rato. Se toma un momento para respirar y procesar todo lo que acaba de pasar en silencio... El tiempo pasa y los ruidos regresan, esta vez aún más intimidantes y fuertes, como si algo grande se aproximara.",
  "“¡¡AHH, Freddy!! ¡La máscara! Pero... Esta una máscara de oso... ¡¡No creo que funcione con él!!”",
  "Una vez más, Mike se coloca la máscara. Por un tiempo no se escuchó ningún ruido que le indique que ya esté a salvo y la presencia de Freddy aún se sentía. Eventualmente, luego de mucha incertidumbre, los sonidos de metal alejándose volvieron y Mike aliviado se quita la máscara.",
  "“Dios... Mío... ¿Qué clase de pesadilla es esta? ¡¿Cuándo acaba este sufrimiento?! ¡¿Y qué hora es?!... Son las 5:45, prácticamente las 6. Yo me largo de acá, ni loco gasto un minuto más en este infierno. Ya ni sé si estoy alucinando, cualquier segundo más acá podría ser el último. Más les vale me paguen por esto, incluso si no cumplí las 6 horas exactas.”",
  //15
  "Siento que estoy olvidando algo... Revisaré por las dudas las cámaras y- ¿¡Y esa marioneta tan perturbadora!? ¡AH, está saliendo de la caja musical! ¡¡Olvidé darle cuerda!!”\n\nMike procede a darle cuerda a la caja musical a través de la opción incorporada en la pantalla, salvándose el pellejo casi de milagro.",
  //16 - RUMBO 2
  "La comodidad del sillón eventualmente le ganó. El joven se quedó dormido en la mitad del episodio y para cuando se despertó ya eran las 2 a.m.\nEn un ataque de desesperación, Mike corre hacia su auto y conduce hasta la pizzería, esperando poder arreglar las cosas.",
  "Pero al llegar, el joven es recibido con una penosa nota de despido en la puerta. Perdió la oportunidad de trabajar en el lugar de su infancia.\n\nCon furia, Mike se desquita con la puerta principal del local e irrumpe en él.",
  "Ya todo lo que quería en ese preciso momento era reencontrarse con sus mascotas de la infancia...\n\nPero no contaba con que ya no eran los mismos de antes ya que estos fueron remodelados.",
  "Dejándose llevar por la ira, Mike destruye a los nuevos animatrónicos sin piedad alguna y escapa de la escena del crimen.",
  //20 - FINALES
  "Al día siguiente, los empleados de la mañana se encontraron con el desastre y llamaron a las autoridades para que arrestaran al culpable, Mike, quien ahora se encuentra fugitivo...",
  "Mike es asesinado por un animatrónico al no haber prestado total atención a lo que el sujeto del teléfono le dijo que haga al pie de la letra.",
  "Así es como logra Mike finalmente terminar su jornada laboral completa y recibir su tan merecido cheque. Después de esta experiencia no volvería a ver sus personajes de la infancia de la misma manera.\n\nFin."
];

let opcion1 = [
/*0*/  "0", "Siguiente", "“Bueno, toca hacerlo, así es la vida.”", "Siguiente", "Siguiente",
/*5*/  "Siguiente", "Siguiente", "Siguiente", "Siguiente", "Alumbrarlo con más potencia",
/*10*/  "Mantener máscara puesta", "Siguiente", "Ponerse la máscara", "Siguiente", "Volver a casa...", "Siguiente",
/*16*/  "Siguiente", "Siguiente", "Siguiente", "Siguiente",
/*20*/  "REINICIAR", "REINICIAR", "REINICIAR"
];
let destino1 = [/*0*/1, 2, 3, 4, 5, /*5*/6, 7, 8, 9, 21, /*10*/11, 12, 13, 14, 21, /*15*/22, 17, 18, 19, 20, /*20*/0, 0, 0];

let opcion2 = ["", "", "“...Un episodio más no le hará daño a nadie.”", "", "", "", "", "", "", "Ponerse la máscara", "Quitarse la máscara y revisar qué pasa", "", "Pensar en una alternativa", "", "“¡Terminaré la jornada, no hice esto en vano!”", "", "", "", "", "", "", "", "", ""];
let destino2 = [/*0*/0, 0, 16, 0, 0, /*5*/0, 0, 0, 0, 10, /*10*/21, 0, 21, 0, 15, /*15*/0, 0, 0, 0, 0, /*20*/0, 0, 0];




function preload() {
  for (let i=0; i<23; i++) {
    escena[i] = loadImage("data/escenas/"+nf(i, 3)+".jpg");
  }

  musica = loadSound("data/audio/escalofrios.mp3");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(14);

  //Máquina de Estados
  if (pantalla === -1) {
    dibuPCreditos();
  } else if (pantalla === 0) {
    dibuPInicio();
  } else {
    dibuEscena(pantalla, texto[pantalla], opcion1[pantalla], opcion2[pantalla]); //elige la escena, el texto y las opciones del número de la Pantalla Actual
  }
}

//Eventos
function mousePressed() {
  if (pantalla === 0 && mouseX>btnInicioX && mouseY>height-150 && mouseX<btnInicioX+btnInicioW && mouseY<btnInicioH+height-150) {
    pantalla--;
    Xtexto1 = -300;
    Xtexto2 = 1100;
    Xtexto3 = -300;
  } else if (pantalla === -1) {
    pantalla++;
  } else if (pantalla === 0 && mouseX>btnInicioX && mouseY>height-250 && mouseX<btnInicioX+btnInicioW && mouseY<btnInicioH+height-250) {
    pantalla++;
    if (!musica.isPlaying()) {
      musica.loop();
    }
  } else {

    let siHay2Botones = (opcion2[pantalla] !== "");
    if (siHay2Botones === true) {
      //Posiciones en X
      let posXBoton1 = width/4;
      let posXBoton2 = (width/4)*3;

      //Area de click del Botón 1
      if (mouseX > posXBoton1-bW/2 && mouseX < posXBoton1+bW/2 && mouseY > bY-bH/2 && mouseY < bY+bH/2) {
        pantalla = destino1[pantalla];
      }
      //Area de click del Botón 2
      else if (mouseX > posXBoton2-bW/2 && mouseX < posXBoton2+bW/2 && mouseY > bY-bH/2 && mouseY < bY+bH/2) {
        pantalla = destino2[pantalla];
      }
    } else {
      //Si solo hay UN botón
      if (mouseX > width/2-150 && mouseY>bY-(bH/2) && mouseX < width/2+150 &&  mouseY<bY+bH/2) {
        pantalla = destino1[pantalla];
      }
    }
  }
}



//Funciones
function dibuEscena(fondo_, texto_, op1_, op2_) {
  //Fondo de la escena
  image(escena[fondo_], 0, 0);

  //Globo de texto
  push();
  fill(100, 200);
  stroke(0);
  strokeWeight(2);
  rectMode(CORNER);
  rect(50, 280, 700, 150, 15);

  //Texto
  fill(255);
  textAlign(LEFT, TOP);
  text(texto_, 75, 300, 650, 130);
  pop();


  //Botones

  //BOTÓN 1
  //La opción 1 nunca está vacía

  let posXBoton1; //Cambio de posición en X
  if (op2_ !== "") { //Chequea si hay o no un 2do botón
    posXBoton1 = width/4;
  } else {
    posXBoton1 = width/2;
  }

  //Efecto hover
  let sobreBoton1 = (mouseX > posXBoton1-bW/2 && mouseX < posXBoton1+bW/2 && mouseY > bY-bH/2 && mouseY < bY+bH/2);
  let colorActualBoton1 = sobreBoton1 ? color(100, 160, 220) : color(70, 130, 180);

  //Rect del botón 1
  fill(colorActualBoton1);
  rect(posXBoton1, bY, bW, bH, 10);
  //Texto del botón 1
  fill(255);
  text(op1_, posXBoton1, bY);
  //}

  //BOTÓN 2
  if (op2_ !== "") { //Si la opción 2 NO está vacía

    //Efecto hover
    let posXBoton2 = (width/4) * 3;
    let sobreBoton2 = (mouseX > posXBoton2-bW/2 && mouseX < posXBoton2+bW/2 && mouseY > bY-bH/2 && mouseY < bY+bH/2);
    let colorActualBoton2 = sobreBoton2 ? color(240, 120, 120) : color(180, 70, 70);

    //Rect del botón 2
    fill(colorActualBoton2);
    rect(posXBoton2, bY, bW, bH, 10);
    //Texto del botón 2
    fill(255);
    text(op2_, posXBoton2, bY);
  }
}



function dibuPInicio() {
  image(escena[0], 0, 0);

  //Título
  push();
  textSize(30);
  fill(255);
  text("La Jornada de Mike", btnInicioX+btnInicioW/2, 150);
  pop();

  //Efecto hover en botones del inicio
  let btnInicioColor1 = color(255, 0, 0);
  let btnInicioLetraColor1 = color(255);
  let btnInicioColor2 = color(255, 0, 0);
  let btnInicioLetraColor2 = color(255);

  if (pantalla === 0 && mouseX>btnInicioX && mouseY>height-250 && mouseX<btnInicioX+btnInicioW && mouseY<btnInicioH+height-250) {
    btnInicioColor1 = color(255, 125, 125);
    btnInicioLetraColor1 = color(0);
  }
  if (pantalla === 0 && mouseX>btnInicioX && mouseY>height-150 && mouseX<btnInicioX+btnInicioW && mouseY<btnInicioH+height-150) {
    btnInicioColor2 = color(255, 125, 125);
    btnInicioLetraColor2 = color(0);
  }

  //Botones
  rectMode(CORNER);
  fill(btnInicioColor1);
  rect(btnInicioX, height-250, btnInicioW, btnInicioH);

  textSize(20);
  fill(btnInicioLetraColor1);
  text("INICIAR", btnInicioX+btnInicioW/2, height-225);

  fill(btnInicioColor2);
  rect(btnInicioX, height-150, btnInicioW, btnInicioH);

  fill(btnInicioLetraColor2);
  text("CRÉDITOS", btnInicioX+btnInicioW/2, height-125);
}

//let Xtexto1 = -100, Xtexto2 = 900, Xtexto3 = -100;

function dibuPCreditos() { //400
  background(100, 0, 0);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);

  let centro = 400;

  if (Xtexto1 < centro) {
    Xtexto1 += 15;
  }
  if (Xtexto2 > centro) {
    Xtexto2 -= 15;
  }
  if (Xtexto3 < centro) {
    Xtexto3 += 15;
  }

  text("Rediseño y simplificación del antiguo código", Xtexto1, height/2-100);
  text("con el fin de tener una mejor comprensión de los métodos utilizados!!", Xtexto2, height/2-50);
  text("Todo por su servidor, Benjamín Higuera Berizonce :)", Xtexto3, height/2);
  textSize(13);
  text("(Click para volver al menú)", width/2, height/2+100);
}



//function GALERIA() { //Me salieron MUCHOS errores de consola en el proceso de creación y me estaba volviendo loco... Así que le pedí a la IA una ayuda para revisar si cargaron bien todas mis imágenes
//  background(20);

//  let x = 30;
//  let y = 30;
//  let anchoMini = 120; // Ancho reducido para las miniaturas
//  let altoMini = 67.5;  // Alto proporcional a 800x450 (proporción 16:9)

//  // Recorremos el array con un ciclo for que ya conoces
//  for (let i = 0; i < escena.length; i++) {
//    if (escena[i]) {
//      // Dibujamos la imagen achicada en la posición actual
//      image(escena[i], x, y, anchoMini, altoMini);
//    }

//    // Movemos la posición X hacia la derecha para la siguiente imagen
//    x += anchoMini + 15;

//    // Si la imagen se sale del borde derecho del lienzo (800px), bajamos de renglón
//    if (x > width - 130) {
//      x = 30;
//      y += altoMini + 10; // Espacio vertical para la siguiente fila
//    }
//  }
//}
