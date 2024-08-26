import { createContext, useContext } from "react";
import { Album } from "./Album";
import data from "./data.json";

export const AlbumContext = createContext({
  album: undefined,
});

class CircleVisual {
  constructor() {

  }

  createLine(p5) {

  }

  draw(p5) {
    p5.noFill();
    stroke(this.wavelengthColor);
    strokeWeight(2);
    beginShape();
    this.createLine(p5)
  }
}

import p5 from 'p5'

class Song {
  constructor() {}

  play(p5) {
    this.visual.draw(p5)
    this.playAudio()
  }
}

class Album {
  sketch(p5) {
    this.p5 = p5
    p5.setup = function() {
      p5.createCanvas()
    }

    p5.draw = function() {
      // this.currentSong(p5)
    }
  }

  playSong(ID) {
    const currentSong = songs.find(song => song.id === ID)
    this.p5.draw = function() {
      currentSong.play(this.p5)
    }
    // this.currentSong = currentSong.play
  }
}

export const AlbumProvider = ({ children }) => {
  const [albumState, setAlbumState] = useState();
  useEffect(() => {
    const visuals = [new CircleVisual(), new LineVisual()];
    const songs = data.songs.map((song) => new Song(song, visuals));
    const albumInstance = new Album(songs);
    const p5Instance = new p5(albumInstance.sketch)
    setAlbumState({
      album:albumInstance,
      songs,
    });
  }, []);
  return album ? (
    <AlbumContext.Provider value={albumState}>
      <canvas id="album-visuals"></canvas>
      {children}
    </AlbumContext.Provider>
  ) : null;
};

const SongComponent = ({ id, title }) => {
  const { album } = useContext(AlbumContext);
  const onClick = () => {
    album.playSong(id);
  };
};

const Playlist = () => {
  const { songs } = useContext(AlbumContext)
  return (
    <>
    {songs.map((song) => <SongComponent {...song} />)}
    </>
  )
}

<App>
  <AlbumProvider>
    <Playlist>
  </AlbumProvider>
</App>;
