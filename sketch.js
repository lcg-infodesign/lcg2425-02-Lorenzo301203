function setup() {
  // Crea una tela che copre l'intera finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta il colore di sfondo della tela
  background("#d1d1d1");

  // Imposta un margine esterno per il contenuto disegnato
  let outerPadding = 90;
  // Imposta la modalità angolo a gradi invece di radianti
  angleMode(DEGREES);
  // Imposta lo spessore delle linee
  strokeWeight(1);
  // Disattiva il riempimento per le forme, si userà solo il contorno
  noFill();

  // Calcola la larghezza totale disponibile, tenendo conto del margine esterno
  let totalWidth = width - outerPadding * 2;
  // Calcola l'altezza totale disponibile, tenendo conto del margine esterno
  let totalHeight = height - outerPadding * 2;

  // Dimensione di base di ogni lato del glifo (un "modulo" di disegno)
  let side = 10;
  // Spaziatura tra i glifi
  let padding = 20;
  // Calcola la dimensione effettiva del glifo includendo il padding
  let glyphSize = side + padding;

  // Numero totale di righe di glifi che possono essere posizionate verticalmente
  let totalRows = totalHeight / glyphSize;
  // Numero totale di colonne di glifi che possono essere posizionate orizzontalmente
  let totalCols = totalWidth / glyphSize;

  // Loop per ogni riga
  for (let row = 0; row < totalRows; row++) {
    // Loop per ogni colonna
    for (let col = 0; col < totalCols; col++) {
      // Calcola la posizione verticale del glifo corrente
      let y = outerPadding + row * glyphSize;
      // Calcola la posizione orizzontale del glifo corrente
      let x = outerPadding + col * glyphSize;
      // Imposta il colore del contorno del glifo
      stroke("darkslategray");

      // Salva il contesto di disegno attuale
      push();
      // Trasla l'origine (0, 0) alla posizione corrente del glifo
      translate(x, y);
      // Ruota il contesto di un angolo casuale tra -15 e 15 gradi
      rotate(random(-15, 15));
      // Disegna il glifo geometrico con dimensione specificata
      drawGeometricGlyph(side);
      // Ripristina il contesto di disegno precedente
      pop();
    }
  }
}

// Funzione draw lasciata vuota perché il disegno è statico e non richiede aggiornamenti continui
function draw() {
  // Vuoto
}

// Funzione per disegnare un glifo geometrico composto da forme diverse
function drawGeometricGlyph(size) {
  // Numero casuale di forme (tra 7 e 9) per ogni glifo
  let shapeCount = int(random(7, 9));

  // Loop per disegnare ogni forma del glifo
  for (let i = 0; i < shapeCount; i++) {
    // Seleziona casualmente il tipo di forma (cerchio, quadrato, triangolo, linea)
    let shapeType = int(random(1, 4));
    // Posizione casuale della forma corrente nel raggio di metà della dimensione
    let x = random(-size / 2, size / 2);
    let y = random(-size / 2, size / 2);
    // Dimensione casuale della forma corrente, tra 30% e 100% della dimensione base
    let shapeSize = random(size * 0.3, size);

    // Salva il contesto di disegno attuale
    push();
    // Trasla l'origine alla posizione casuale calcolata per la forma
    translate(x, y);
    // Ruota la forma di un angolo casuale tra 0 e 360 gradi
    rotate(random(0, 360));

    // Controlla il tipo di forma e disegna di conseguenza
    if (shapeType === 0) {
      // Disegna un cerchio al centro delle coordinate (0, 0)
      ellipse(0, 0, shapeSize);
    } else if (shapeType === 1) {
      // Disegna un quadrato con il centro in (0, 0)
      rectMode(CENTER);
      rect(0, 0, shapeSize, shapeSize);
    } else if (shapeType === 2) {
      // Disegna un triangolo con vertici centrati attorno a (0, 0)
      triangle(
        -shapeSize / 2, shapeSize / 2, // vertice in basso a sinistra
        shapeSize / 2, shapeSize / 2,  // vertice in basso a destra
        0, -shapeSize / 2              // vertice in alto
      );
    } else if (shapeType === 3) {
      // Disegna una linea dal centro (0, 0) a un punto offset di shapeSize
      line(0, 0, shapeSize, shapeSize);
    }
    // Ripristina il contesto di disegno precedente
    pop();
  }
}
