let song;
let amp;
let button;

var volhistory = [];

function preload() {
  song = loadSound("assets/lastDays.mp3");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
}

function draw() {
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

function mouseClicked() {
  if (song.isPlaying()) {
    console.log("SONG IS PLAYING");
    song.pause();
  } else {
    song.play();
  }
}
