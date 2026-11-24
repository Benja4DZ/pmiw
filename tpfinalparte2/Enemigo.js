class Enemigo {
  constructor(img_, x_, y_) {
    this.img = img_;
    this.x = x_;
    this.y = y_;
    this.esMalo = true;
    this.tiempoDeAparicion = millis();
    this.duracion = 2000;
    this.estaActivo = true;
    this.puntos = 100;
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
    
    //Efecto temblor (hecho con ayuda de la IA)
    let temblorX = sin(frameCount * 0.6) * 4;
    let angulo = sin(frameCount * 0.4) * 0.04;
    
    push();
    translate(this.x + temblorX, this.y);
    rotate(angulo);
    imageMode(CENTER);
    image(this.img, 0, 0, 200, height);
    pop();
  }
}
