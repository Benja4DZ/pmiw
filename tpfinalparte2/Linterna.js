class Linterna {
  constructor() {
    this.tiempoLimite = 0;
    this.duracion = 200; //milisegundos
  }

  alumbrar() { //Se la llama con teclaPresionada
    this.tiempoLimite = millis() + this.duracion; //Al milisegundo exacto en que se prende se le suma cuánto durará
  }

  estaPrendida() { //Siempre es false, devuelve true al presionar hasta que llega a su tiempo límite.
    return millis() < this.tiempoLimite;
  }

  dibujar() {
    if (!this.estaPrendida()) { //Si es false, no la dibuja
      return;
    }
    push();
    noStroke();
    fill(255, 255, 200, 50);
    ellipse(width/2, height/2, 250, 400);
    pop();
  }
}
