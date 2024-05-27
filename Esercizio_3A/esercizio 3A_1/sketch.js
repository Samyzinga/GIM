let secondColor;
let minuteColor;
let hourColor;
let lastSecond;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);  // Assicurati che l'angolo sia in radianti
  noStroke();  // Rimuovi il contorno
  changeColors();  // Inizializza i colori
  lastSecond = second();  // Inizializza l'ultimo secondo
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); // Imposta lo sfondo bianco

  translate(width / 2, height / 2);

  let TAU = TWO_PI;  // Definisci TAU come 2π

  // Disegna i cerchi centrali
  stroke(255, 140, 0); // Contorno arancione scuro
  noFill();
  circle(0, 0, 700); // Cerchio più esterno
  circle(0, 0, 600); // Cerchio intermedio
  circle(0, 0, 400); // Cerchio più interno
  circle(0, 0, 200); // Cerchio più interno
  noStroke();

  // Cambia colori ogni 60 secondi
  if (second() === 0 && lastSecond !== 0) {
    changeColors();
  }
  lastSecond = second();

  // Calcola la posizione dei secondi
  const ms = (new Date()).getMilliseconds() / 1000 * TAU / 60;
  fill(secondColor);
  push();
  rotate(TAU / 60 * second() + ms);
  circle(0, -350, 50);
  pop();

  // Calcola la posizione dei minuti
  const secondFraction = second() / 60 * TAU / 60;
  fill(minuteColor);
  push();
  rotate(TAU / 60 * minute() + secondFraction);
  circle(0, -260, 75);
  pop();

  // Calcola la posizione delle ore
  const minuteFraction = minute() / 60 * TAU / 12;
  fill(hourColor);
  push();
  rotate(TAU / 12 * (hour() % 12) + minuteFraction);
  circle(0, -150, 100);
  pop();
}

function changeColors() {
  secondColor = color(0, 0, 0, 255);  // Nero al 100%
  minuteColor = color(64, 64, 64, 255);  // Grigio scuro al 100%
  hourColor = color(192, 192, 192, 255); // Grigio chiaro al 100%
}
