// los {} son objetos 1:1, los [] son arrays con lista de datos.
const Pantallas = {
  P1: { escena: "escena001.jpg",
        dialogos: [
                   {globo: "globo3.png", texto: "Un día como cualquier otro, Mike se pone a leer el diario\ntranquilamente hasta que encuentra un anuncio en\nbúsqueda de nuevo personal para la reapertura de la\nantigua pizzería de su infancia."},
                   {globo: "globo3.png", texto: "Mike se contacta con el número y se le informa que\ntrabajaría como guardia nocturno de 12 a 6 a.m. Mike\nduda por un momento, pero termina aceptando el puesto."}
                  ],
        siguiente: "P2"
 },
  P2: { escena: "escena002.jpg",
        dialogos: [
                   {globo: "globo1.png", texto: "¡Aún no puedo creer que vaya a trabajar en Freddy\nFazbear's Pizza! Ese lugar me trae tantos buenos\nrecuerdos."},
                   {globo: "globo1.png", texto: "Los cumpleaños de mis amigos, la sala de arcade, la\nbuena pizza... ¡y los animatrónicos! ¿Cómo no\nextrañarlos? Freddy el oso, Bonnie el conejo, Chica la\ngallina..."},
                   {globo: "globo1.png", texto: "De tanto pensar en la pizzería me está dando hambre,\nvoy a ver qué hay en la heladera así morfo algo mientras\ntermino de verme esta serie."},
                   {globo: "globo3.png", texto: "Al joven Mike se le pasó la tarde volando viendo la tele."},
                   {globo: "globo1.png", texto: "¿¡Cómo vas a terminar el episodio así!? Me urge ver\ncómo sigue, no me puedo quedar con la duda... Igual,\nme estoy cayendo del sueño, no sé cómo haré en el\ntrabajo..."},
                   {globo: "globo1.png", texto: "Uh, ya son casi las 11, debería estar preparándome...\npero qué fiaca."}
                  ],
        opciones: [
                   {botón: "001.png", destino: "P2_A" },
                   {botón: "002.png", destino: "P2_B" }
                  ]
 },
 
 
  P2_A: { dialogos: [
                     {globo: "globo1.png", texto: "Bueno, toca hacerlo, así es la vida."}
                    ],
    siguiente: "P3"
  },
  P2_B: { dialogos: [
                     {globo: "globo1.png", texto: "...Un episodio más no le hará daño a nadie."},
                     {globo: "globo3.png", texto: "Lo que Mike ignoró es que la comodidad del sillón eventualmente le ganaría. El joven se quedó dormido en la mitad del episodio y para cuando se despertó ya eran las 2 a.m."}
                    ],
    siguiente: "P20"
  },
  
  //ESCENA AFUERA DE PIZZERÍA
  //text("", 300, 350);
  //text("", 300, 350);

  //ESCENA OFICINA (VACÍA)
  //text("", 300, 350);

  //PHONE GUY
  //text("", 300, 350);
  //text("", 300, 350);
  //text("", 300, 350);

  //ESCENA CÁMARA STAGE (CON 3 ANIMATRÓNICOS)
  //MIKE
  //text("", 300, 350);
  //PHONE GUY
  //text("", 300, 350);

  //ESCENA CÁMARA SALA DE PREMIOS (SIN PUPPET)
  //PHONE GUY
  //text("", 300, 350);
  //text("", 300, 350);
  //MIKE
  //text("", 300, 350);

  //ESCENA CÁMARA STAGE (SOLO ESTÁ FREDDY)
  P3: { escena: "escena003.jpg",
        dialogos: [
                   {globo: "globo1.png", texto: "Se ve... más tétrica de lo que recordaba... probablemente\npor la hora y la falta de luz." },
                   {globo: "globo1.png", texto: "Vos podés Mike, solo entrá y avanzá hasta la sala de\nseguridad. Decí que me pasaron un mapa del lugar y de\npaso me traje una linterna." }
                  ],
        siguiente: "P4"
  },
  P4: { escena: "escena004.jpg",
        dialogos: [
                   { globo: "globo1.png", texto: "Debe ser acá. Con razón me pasaron un mapa, este\nlugar es enorme. Y no parece haber nadie... No sé si\nsorprenderme, por algo pedían staff nocturno." },
                   { globo: "globo2.png", texto: "¿Hola? ¿Hola? ¿Se escucha? Bueno, espero que sí.\n¿Qué tal, empleado? Este es un mensaje pregrabado\npara los próximos guardias de seguridad." },
                   { globo: "globo2.png", texto: "Mirá, no me pagan por esto, y por el bien de mi salud\nmental no pienso seguir en este puesto, pero pensaba\ndejar esta mini ayuda para quien le sirva." },
                   { globo: "globo2.png", texto: "Desde mi experiencia, lo que más te van a servir serán el\nmini televisor en tu escritorio para ver las cámaras y la\nmáscara de oso debajo de la silla. Arrancá yendo a la\ncámara 7." }
                  ],
        siguiente: "P5"
  },
  P5: { escena: "escena005.jpg",
        dialogos: [
                   { globo: "globo1.png", texto: "¡Dios mío, pero qué cambiados están! La reapertura vino\ncon nuevas caras." },
                   { globo: "globo2.png", texto: "Deberías estar viendo el escenario con los\nanimatrónicos si es que no cambiaron las cámaras.\nEchales un ojo siempre que puedas. Si vas a revisarlos\nen persona, ponete la máscara de oso, vos haceme\ncaso. Pasá a la cámara 9." }
                  ],
        siguiente: "P6"
  },
  P6: {
    escena: "escena006.jpg",
    dialogos: [
      { globo: "globo2.png", texto: "Esa es la sala de premios. Lo importante acá es esa\nenorme caja musical. Cada que accedas a esta cámara\npodrás ver un opción para darle cuerda a la caja. Hacelo.\nConstantemente. O te arrepentirás." },
      { globo: "globo2.png", texto: "Eso es todo, prácticamente. Por supuesto que hay otras\ncámaras pero no son realmente útiles a menos que\nentren a robar. Seguro estés lleno de preguntas, pero ya\nirás agarrándole la mano. ¡Suerte, la necesitarás!" },
      { globo: "globo1.png", texto: "...Qué tipo más raro, no tuvo ningún sentido todo lo que\nme dijo... Bueno, quiero volver a ver los nuevos\nanimatrónicos." }
    ],
    siguiente: "P7"
  },
  P7: {
    escena: "escena007.jpg",
    dialogos: [
      { globo: "globo1.png", texto: "Pero... ¡¿Qué?! ¡¿Adónde se fueron los otros dos?! ¡¿Acaso entraron a robar?!" },
      { globo: "globo3.png", texto: "Mike escucha ruidos en frente suyo. Desvía sus ojos del mini televisor y enciende su linterna." }
    ],
    siguiente: "P8"
  },
  P8: {
    escena: "escena008.jpg",
    dialogos: [
      { globo: "globo1.png", texto: "Pero... ¡¿Chica?! ¡¿Qué hace ahí?! ¡¿Desde cuándo pueden moverse de sus posiciones?! ¡Esto es completamente nuevo! ¡Y aterrador!" },
      { globo: "globo3.png", texto: "Se escuchan ruidos a su derecha. Mike dirige su linterna hacia el conducto de ventilación." }
    ],
    siguiente: "P9"
  },
  P9: {
    escena: "escena009.jpg",
    dialogos: [
      { globo: "globo1.png", texto: "¡¿Bonnie?! ¡¿Cómo te metiste ahí?! ¡¡Me está viendo fijamente!! La linterna parece que lo dejó inmovilizado, ¡¿pero y ahora qué hago?!" }
    ],
    opciones: [
      { boton: "003.png", destino: "Final2" },
      { boton: "004.png", destino: "P10" }
    ]
  },
  P10: {
    escena: "escena010.jpg",
    dialogos: [
      { globo: "globo3.png", texto: "Mike siente nervios, tensión y calor con la máscara puesta. Vuelven a sonar ruidos metálicos a su derecha pero Mike se mantiene tembloroso y con los ojos cerrados del miedo." },
      { globo: "globo3.png", texto: "Pasan los minutos y aún no se quita la máscara... Hasta que nuevamente percata sonidos metálicos, pero esta vez de su lado izquierdo." }
    ],
    opciones: [
      { boton: "005.png", destino: "P10_A" },
      { boton: "006.png", destino: "Final2" }
    ]
  },
  P10_A: {
    dialogos: [
      { globo: "globo3.png", texto: "Mike se siente incapaz de quitarse la máscara a pesar del\nsudor en su cara por los nervios, respiración rápida y\njadeo. Nuevamente hay ruidos provenientes del conducto\nizquierdo y entonces Mike lo asocia con la huida del\npeligro. Dudándolo un poco, decide sacarse la máscara a\nno soportar el calor." },
      { globo: "globo3.png", texto: "Dudándolo un poco, decide sacarse la máscara al no poder soportar el sofocante calor." }
    ],
    siguiente: "P11"
  },
  P11: {
    escena: "escena011.jpg",
    dialogos: [
      { globo: "globo3.png", texto: "Mike baja la guardia y descansa por un rato. Se toma un momento para respirar y procesar todo lo que acaba de pasar en silencio." },
      { globo: "globo3.png", texto: "El tiempo pasa y los ruidos regresan, esta vez aún más intimidantes y fuertes, como si algo grande se aproximara." }
    ],
    siguiente: "P12"
  },
  P12: { escena: "escena012.jpg",
         dialogos: [
                    { globo: "globo1.png", texto: "¡¡AHH, Freddy!! ¡La máscara! Pero... Esta una máscara de oso... ¡¡No creo que funcione con él!!" }
                   ],
         opciones: [
                    { boton: "007.png", destino: "P13" },
                    { boton: "008.png", destino: "Final2" }
    ]
  },
  P13: { escena: "escena013.jpg",
         dialogos: [
                    { globo: "globo1.png", texto: "Una vez más, Mike se coloca la máscara. Por un tiempo no se escuchó ningún ruido que le indique que ya esté a salvo y la presencia de Freddy aún se sentía. Eventualmente, luego de mucha incertidumbre, los sonidos de metal alejándose volvieron y Mike aliviado se quita la máscara." }
                   ],
         siguiente: "P14"
  },
  P14: { escena: "escena014.jpg",
         dialogos: [
                    { globo: "globo1.png", texto: "Dios... Mío... ¿Qué clase de pesadilla es esta? ¡¿Cuándo acaba este sufrimiento?! ¡¿Y qué hora es?!" },
                    { globo: "globo1.png", texto: "Son las 5:45, prácticamente las 6. Yo me largo de acá, ni loco gasto un minuto más en este infierno. Ya ni sé si estoy alucinando, cualquier segundo más acá podría ser el último. Más les vale me paguen por esto, incluso si no cumplí las 6 horas exactas." }
                   ],
         opciones: [
                    { boton: "009.png", destino: "Final2" },
                    { boton: "009.png", destino: "P14_B" }     // <- asigná el botón que corresponda
                   ]
  },
  P14_B: { dialogos: [
                      { globo: "globo1.png", texto: "No... Necesito asegurar esa plata, no hice todo esto en vano. Además, siento que estoy olvidando algo... Revisaré de nuevo las cámaras." }
                     ],
           siguiente: "P15"
  },
  P15: { escena: "escenario015.jpg",
         dialogos: [
                    { globo: "globo1.png", texto: "¿¡Y esa marioneta tan perturbadora!? ¡AH, está saliendo de la caja musical! ¡¡Olvidé darle cuerda!!" },
                    { globo: "globo1.png", texto: "Mike procede a darle cuerda a la caja musical a través de la opción incorporada en la pantalla, salvándose el pellejo casi de milagro." }
                   ],
         siguiente: "Final3"
  },



  P20: { escena: "escenario016.jpg",
         dialogos: [
                    { globo: "globo3.png", texto: "En un ataque de desesperación, Mike corre hacia su auto y conduce hasta la pizzería, esperando poder arreglar las cosas." }
                   ],
         siguiente: "P21"
  },
  P21: { escena: "escenario017.jpg",
         dialogos: [
                    { globo: "globo3.png", texto: "Pero al llegar, el joven es recibido con una penosa nota de despido en la puerta. Perdió la oportunidad de trabajar en el lugar de su infancia." },
                    { globo: "globo3.png", texto: "En una mezcla de emociones de tristeza y furia, Mike se desquita con la puerta principal del local e irrumpe en él. Todo lo que quería en ese momento era volver a ver a los animatrónicos." }
                   ],
         siguiente: "P22"
  },
  P22: { escena: "escenario018.jpg",
         dialogos: [
                    { globo: "globo3.png", texto: "Pero no contaba con que ya no eran los mismos de antes ya que estos fueron remodelados." },
                    { globo: "globo1.png", texto: "¡¿Y estos quiénes son?! ¡¿Qué les hicieron?! ¡¡Lo único que me faltaba, los arruinaron!!" }
                   ],
         siguiente: "P23"
  },
  P23: { escena: "escenario018.jpg",
         dialogos: [
                    { globo: "globo3.png", texto: "Dejándose llevar por la ira, Mike destruye a los nuevos animatrónicos sin piedad alguna y escapa de la escena del crimen." }
                   ],
         siguiente: "Final1"
  },

// FINALES
  Final1: { escena: "final1.jpg",
            dialogos: [
                       { globo: "globo3.png", texto: "Al día siguiente, los empleados de la mañana se encontraron con el desastre y llamaron a las autoridades para que arrestaran al culpable, Mike, quien se encuentra fugitivo." }
                      ],
            siguiente: "RESET"
  },
  Final2: { escena: "final2.jpg",
            dialogos: [
                       { globo: "globo3.png", texto: "Mike es asesinado por un animatrónico al no haber prestado atención a lo que el sujeto del teléfono le dijo que haga." }
                      ],
            siguiente: "RESET"
  },
  Final3: { escena: "final3.jpg",
            dialogos: [
                       { globo: "globo3.png", texto: "Así es como logra Mike finalmente terminar su jornada laboral completa y recibir su tan merecido cheque. Después de esta experiencia no volvería a ver sus personajes de la infancia de la misma forma." }
                      ],
            siguiente: "RESET"
  }
};
