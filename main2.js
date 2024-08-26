let mySound;
let soundViz;
let metatron, pinkFloyd;
let backgroundColor = "red";
let currentlyPlaying;

function floydDraw() {
  for (let i = 0; i < 6; i++) {
    soundViz.displayWavelength(50, 0.5, i);
  }
  for (let i = 0; i < 10; i++) {
    soundViz.displayWavelength("vertical", 1.5, i);
  }
}

function metratonDraw() {
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  background("red");
  var vol = amp.getLevel();
  volhistory.push(vol);
  translate(width / 2, height / 2);
  noFill();
  stroke("yellow");
  strokeWeight(2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 50, 800);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  stroke("yellow");
  fill("black");
  ellipse(1, 50, 400, vol * 300);
  ellipse(1, 150, 200, vol * 200);

  fill("black");
  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
}

function preload() {
  pinkFloyd = new Song(
    (song = "assets/isThereAnybodyOutThere.mp3"),
    (title = "is there anybody out there?"),
    (artist = "pink floyd"),
    (buttonPosition = [100, 100]),
    (colors = ["black", "black", "red"]),
    (drawFunction = floydDraw)
  );
  metatron = new Song(
    (song = "assets/lastDays.mp3"),
    (title = "last days of infinity"),
    (artist = "dj metatron"),
    (buttonPosition = [100, 175]),
    (colors = ["black", "black", "red"]),
    (drawFunction = metratonDraw)
  );
  // mySound = loadSound("assets/lastDays.mp3");
  // mySound = loadSound("assets/isThereAnybodyOutThere.mp3");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // metatron.setup();
  pinkFloyd.setup();
}

function draw() {
  background(backgroundColor);
  fill(255);
  // metatron.draw();
  pinkFloyd.draw();
}

function mouseClicked() {
  // metatron.mouseClicked();
  pinkFloyd.mouseClicked();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
