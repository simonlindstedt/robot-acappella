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
  const robot = new Singer("Thomas");

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

  return (
    <Main>
      <SearchField
        handleChange={(e) => setArtist(e.target.value)}
        label="Artist"
      />
      <SearchField handleChange={(e) => setSong(e.target.value)} label="Song" />
      <Button
        onClick={() => {
          setSearchText({
            artist: artist,
            song: song,
          });
        }}
      >
        Search
      </Button>
      <SongText>
        {songText?.map((word, key) => {
          return (
            <span
              key={key}
              onClick={() => {
                robot.Sing(word);
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </SongText>
    </Main>
  );
};

export default Home;
