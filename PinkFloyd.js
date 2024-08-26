class PinkFloyd {
  constructor(songManager) {
    this.title = "is there anybody out there?";
    this.artist = "pink floyd";
    this.buttonPosition = [100, 100];
    this.colors = ["black", "black", "red"];
    this.songManager = songManager;
  }

  preload() {
    this.song = loadSound("assets/isThereAnybodyOutThere.mp3");
    this.soundViz = new SoundVisual(
      this.song,
      this.colors[0],
      this.colors[1],
      this.colors[2]
    );
    console.log("preload pinklfoyd");
  }

  setup() {
    console.log("setup pinkfloyd");
    this.song.onended(() => {
      this.songManager.next();
    });
  }

  draw() {
    background("red");
    for (let i = 0; i < 6; i++) {
      this.soundViz.displayWavelength(50, 0.5, i);
    }
    for (let i = 0; i < 10; i++) {
      this.soundViz.displayWavelength("vertical", 1.5, i);
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
