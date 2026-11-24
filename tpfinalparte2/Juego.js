class Juego {
  constructor() {
    this.reiniciar();
    this.linterna = new Linterna();
  }

  reiniciar() { //se la llama al clickear en INICIAR
    this.vidas = 3;
    this.puntaje = 0;

    this.tiempoInicioPartida = millis(); //guarda en qjé milisegundo empezó a jugar
    this.duracionPartida = 60000; //1 min

    this.robotActual = null; //null = vacío, no válido
    this.proxSpawn = millis() + random(500, 3000);

    this.resultado = "";
  }

  actualizar() {
    //Si se queda sin vidas (PIERDE)
    if (this.vidas <= 0) {
      this.vidas = 0; //Anclar en 0 por las dudas
      this.resultado = "HAS MUERTO";
      pantalla = 'reseteo';
      return;
    }

    //Si sobrevive (GANA)
    if (millis() - this.tiempoInicioPartida > this.duracionPartida) { //Milisegundos desde que se ejecutó el programa - Milisegundo en el que inició el juego (para "reiniciar" el contador)
      this.resultado = "¡¡¡SOBREVIVISTE!!!";
      pantalla = 'reseteo';
      return;
    }

    //Si NO hay un robot activo, esperar y crear uno
    if (this.robotActual === null || !this.robotActual.estaActivo) { //Si NO hay robot actual o si NO está activo
      if (millis() > this.proxSpawn) {
        this.generarRobot();
      }
      return;
    }

    //Si se AGOTA el tiempo de reacción de un robot
    if (this.robotActual.tiempoAgotado()) {

      if (this.robotActual.esMalo) { //Si era malo
        this.vidas -= 1; //-1 vida al no reaccionar a tiempo
      } else { //Si era bueno
        this.puntaje += 13; //+puntos por ignorar al aliado
      }

      this.robotActual.estaActivo = false; //Desactivar al robot
      this.proxSpawn = millis() + random(500, 3000); //Preparar el próximo spawneo
    }
  }

  generarRobot() {
    let esMalo = random(1) < 0.5;

    //Elige el robot
    if (esMalo) {
      let indice = floor(random(imgMalo.length));
      this.robotActual = new Enemigo(imgMalo[indice], width/2, height/2);
    } else {
      let indice = floor(random(imgBueno.length));
      this.robotActual = new Aliado(imgBueno[indice], width/2, height/2);
    }

      if (!audioAparece.isPlaying()) {
      audioAparece.play();
    }
  }

  teclaPresionada(k, kCode) {
    if (k === ' ' || kCode === 32) {
      this.linterna.alumbrar();
      if (this.robotActual !== null && this.robotActual.estaActivo) { //Si HAY un robot y está activo

        if (this.robotActual.esMalo) { //Si esMalo es true
          this.puntaje += 100; //Bien
        } else { //Si esMalo es false
          this.vidas -= 1; //Mal
        }

        this.robotActual.estaActivo = false; //Desavtivar el robot
        this.proxSpawn = millis() + random(500, 3000); //Preparar el próximo spawneo
      }
    }
  }

  dibujar() {
    this.actualizar();

    //Dibujar robot
    if (this.robotActual !== null && this.robotActual.estaActivo) { //Si HAY un robot y está activo
      this.robotActual.dibujar();
    }
    
    this.linterna.dibujar();

    //HUD
    let tiempoRestante = max(0, ceil((this.duracionPartida - (millis() - this.tiempoInicioPartida)) / 1000));//max compara los números en sus parámetros y determina cuál es el más grande. //ceil redondea un float al próximo int (8.22 = 9, 9.03 = 10)
    push();
    textSize(20);
    text("Vidas: "+this.vidas+"  |  Puntaje: "+this.puntaje+"  |  Tiempo: "+tiempoRestante+" segundos", width/2, 30);
    pop();
  }
}
