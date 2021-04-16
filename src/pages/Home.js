import React from "react";
import Button from "../components/Button";
import Main from "../components/Main";
import SearchField from "../components/SearchField";
import SongText from "../components/SongText";

import stringToWordsArray from "../functions/stringToWordsArray.js";
import Singer from "../functions/singer.js";

const Home = () => {
  const [artist, setArtist] = React.useState("");
  const [song, setSong] = React.useState("");
  const [searchText, setSearchText] = React.useState({});
  const [songText, setSongText] = React.useState([]);
  const [playing, setPlaying] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const robot = new Singer();

  const getLyrics = async (artist, song) => {
    const baseUrl = "https://api.lyrics.ovh/v1";
    const response = await fetch(`${baseUrl}/${artist}/${song}`);
    return await response.json();
  };

  React.useEffect(() => {
    if (Object.entries(searchText) < 2) {
      return;
    }
    const { artist, song } = searchText;

    (async () => {
      const { lyrics } = await getLyrics(artist, song);
      if (lyrics) {
        setSongText(stringToWordsArray(lyrics));
      }
    })();
  }, [searchText]);

  React.useEffect(() => {
    console.log(playing);
    if (playing) {
      (async () => {
        for (let i = position; i < songText.length; i++) {
          setPosition(i);
          await robot.Sing(songText[i]);
          console.log(i);
          if (!playing) {
            console.log("hello break");
            return;
          }
        }
      })();
    }
  }, [playing]);

  return (
    <Main>
      <SearchField
        handleChange={(e) => setArtist(e.target.value)}
        label="Artist"
      />
      <SearchField handleChange={(e) => setSong(e.target.value)} label="Song" />
      <Button
        handleClick={() => {
          setSearchText({
            artist: artist,
            song: song,
          });
        }}
        buttonText="Search"
      />
      <Button
        handleClick={() => setPlaying(!playing)}
        buttonText={
          playing ? "Pause button doesn't work yet, so enjoy!" : "Play"
        }
      />
      <SongText words={songText} highlight={position} />
    </Main>
  );
};

export default Home;
