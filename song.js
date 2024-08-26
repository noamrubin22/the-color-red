class Song {
  constructor({ song, title, artist, buttonPosition, colors, drawFunction }) {
    this.song = loadSound(song);
    this.artist = artist;
    this.title = title;
    this.buttonPosition = buttonPosition;
    this.colors = colors;
    this.drawFunction = drawFunction;
  }

  setup() {
    soundViz = new SoundVisual(
      this.song,
      this.colors[0],
      this.colors[1],
      this.colors[2]
    );
    this.button = createButton(this.title);
    this.button.addClass("song-btn");
    this.button.position(this.buttonPosition[0], this.buttonPosition[1]);
    this.button.mousePressed(this.playSong);
    console.log("Setup");
  }

  draw() {
    this.drawFunction();
  }

  play() {
    this.draw();
    this.playAudio();
    //
    // this.drawFunction();
    console.log(this.title);
    console.log("setupppp");
  }

  mouseClicked() {
    if (!this.song.isPlaying()) {
      this.song.play();
    } else {
      this.song.pause();
    }
  }
}
