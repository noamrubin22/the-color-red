class SongManager {
  constructor() {
    this.songs = [];
    this.currentSong = null;
  }

  preload() {
    this.songs.forEach((song) => {
      song.preload();
    });
  }

  setup() {
    this.songs.forEach((song) => {
      song.setup();
    });
  }

  draw() {
    if (this.currentSong) {
      this.currentSong.draw();
    }
  }

  mouseClicked() {
    if (this.currentSong) {
      console.log("CURRENT SONG ", this.currentSong);
      this.currentSong.mouseClicked();
    }
  }

  mouseWheel(event) {
    if (this.currentSong) {
      if (this.currentSong.mouseWheel) {
        this.currentSong.mouseWheel(event);
      }
    }
  }

  addSong(song) {
    console.log("AD SONG", song);
    this.songs.push(song);
  }

  next() {
    if (this.songs.length > 0) {
      this.currentSong =
        this.songs[
          (this.songs.indexOf(this.currentSong) + 1) % this.songs.length
        ];
      this.currentSong.setup();
    }
  }

  start() {
    this.next();
  }

  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
