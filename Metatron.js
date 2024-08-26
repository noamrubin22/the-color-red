class Metatron {
  constructor(songManager) {
    this.title = "last days of infinity";
    this.artist = "dj metatron";
    this.buttonPosition = [100, 175];
    this.colors = ["black", "black", "red"];
    this.songManager = songManager;
    this.volHistory = [];
  }

  preload() {
    this.song = loadSound("assets/lastDays.mp3");
    this.soundViz = new SoundVisual(
      this.song,
      this.colors[0],
      this.colors[1],
      this.colors[2]
    );
    console.log("preload metatron");
  }

  setup() {
    console.log("setup metatron");
    angleMode(DEGREES);
    this.amp = new p5.Amplitude();

    this.song.onended(() => {
      this.songManager.next();
    });
  }

  draw() {
    background("red");
    this.vol = this.amp.getLevel();
    this.volHistory.push(this.vol);
    translate(width / 2, height / 2);
    noFill();
    stroke("yellow");
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < 360; i++) {
      var r = map(this.volHistory[i], 0, 1, 50, 800);
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }
    endShape();
    stroke("yellow");
    fill("black");
    ellipse(1, 50, 400, this.vol * 300);
    ellipse(1, 150, 200, this.vol * 200);

    fill("black");
    if (this.volHistory.length > 360) {
      this.volHistory.splice(0, 1);
    }
  }

  mouseClicked() {
    if (!this.song.isPlaying()) {
      console.log("song should play");
      this.song.play();
    } else {
      console.log("SONG SHOULD PAUSE");
      this.song.pause();
    }
  }
}
