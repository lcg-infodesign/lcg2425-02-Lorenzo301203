function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#d1d1d1");

  let outerPadding = 30;
  angleMode(DEGREES);
  strokeWeight(1);
  noFill();

  let totalWidth = width - outerPadding * 2;
  let totalHeight = height - outerPadding * 2;

  let side = 20;
  let padding = 25;
  let glyphSize = side + padding;

  let totalRows = totalHeight / glyphSize;
  let totalCols = totalWidth / glyphSize;

  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalCols; col++) {
      let y = outerPadding + row * glyphSize;
      let x = outerPadding + col * glyphSize;
      stroke("darkslategray");

      push();
      translate(x, y);
      rotate(random(-15, 15));
      drawGeometricGlyph(side);
      pop();
    }
  }
}

function draw() {
  // Lasciato vuoto poiché il disegno è statico.
}

function drawGeometricGlyph(size) {
  let shapeCount = int(random(2, 5));

  for (let i = 0; i < shapeCount; i++) {
    let shapeType = int(random(0, 4));
    let x = random(-size / 2, size / 2);
    let y = random(-size / 2, size / 2);
    let shapeSize = random(size * 0.3, size);

    push();
    translate(x, y);
    rotate(random(0, 360));

    if (shapeType === 0) {
      // Disegna un cerchio
      ellipse(0, 0, shapeSize);
    } else if (shapeType === 1) {
      // Disegna un quadrato
      rectMode(CENTER);
      rect(0, 0, shapeSize, shapeSize);
    } else if (shapeType === 2) {
      // Disegna un triangolo
      triangle(
        -shapeSize / 2, shapeSize / 2,
        shapeSize / 2, shapeSize / 2,
        0, -shapeSize / 2
      );
    } else if (shapeType === 3) {
      // Disegna una linea
      line(0, 0, shapeSize, shapeSize);
    }
    pop();
  }
}
