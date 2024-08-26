let songManager = new SongManager();
let pinkFloydButton;
let metatronButton;

function preload() {
  songManager.addSong(new PinkFloyd(songManager));
  songManager.addSong(new Metatron(songManager));
  songManager.preload();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  pinkFloydButton = createButton("is there anybody out there?");
  pinkFloydButton.position(100, 100);
  pinkFloydButton.addClass("song-btn");
  pinkFloydButton.mousePressed(() => {
    songManager.currentSong = songManager.songs[0];
  });

  metatronButton = createButton("last days of infinity");
  metatronButton.position(100, 175);
  metatronButton.addClass("song-btn");
  metatronButton.mousePressed(() => {
    songManager.currentSong = songManager.songs[1];
  });

  songManager.start();
}

function draw() {
  songManager.draw();
}

function mouseClicked() {
  if (
    !isInsideButton(mouseX, mouseY, pinkFloydButton) &&
    !isInsideButton(mouseX, mouseY, metatronButton)
  ) {
    if (songManager.currentSong) {
      if (songManager.currentSong.song.isPlaying()) {
        songManager.currentSong.song.pause();
      } else {
        songManager.currentSong.song.play();
      }
    }
  }
}
function isInsideButton(mouseX, mouseY, button) {
  const buttonX = button.position().x;
  const buttonY = button.position().y;
  const buttonWidth = button.width;
  const buttonHeight = button.height;

  return (
    mouseX >= buttonX &&
    mouseX <= buttonX + buttonWidth &&
    mouseY >= buttonY &&
    mouseY <= buttonY + buttonHeight
  );
}
// function mouseWheel(event) {
//   if (songManager && event) {
//     if (songManager.mouseWheel) {
//       songManager.mouseWheel(event);
//     }
//   }
// }
