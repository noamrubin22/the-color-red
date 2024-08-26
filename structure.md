- Album (class)

  - P5 initialize
  - Songs
  - PlaySong()

- Song (class)

  - ID
  - VisualID
  - Audio file
  - Colors
  - Title
  - Visual
  - Play()
  - Pause()

- Visual (class)
  - ID

# APP

- Load JSON file
- Create visuals (Visual class)
- Create songs (Song class) > visuals inject
- Create album (Album class) > inject songs

# UI

- Canvas (P5) - React Context
- Playlist (React)
  - Song = Button > Album.playSong(ID)

{
songs: [
{
title: "",
visualID: "bla"
}
],
}

<App>
  <AlbumProbi>
    <Playlist>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </Playlist>
  </AlbumProbi>
</App>
