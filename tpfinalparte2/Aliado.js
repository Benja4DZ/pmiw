class Aliado {
  constructor(img_, x_, y_) {
    this.img = img_;
    this.x = x_;
    this.y = y_;
    this.esMalo = false;
    this.tiempoDeAparicion = millis();
    this.duracion = 2000;
    this.estaActivo = true;
    this.puntos = 13;
  }

  tiempoAgotado() {
    return millis() - this.tiempoDeAparicion > this.duracion;
    //Calcula y devuelve true si pasaron X millis desde que aparece el robot.
    //Milisegundo actual - Milisegundo en el que apareció el robot > Duración máxima
    //Ej: 6000 - 5000 > 2000 (return false) // 7000 - 5000 > 2000 (return true)
  }

  dibujar() {
    if (!this.estaActivo) {
      return; //Si NO está activo (estaActivo = false) no dibuja nada.
    }
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, 0, 200, height);
    pop();
  }
}
