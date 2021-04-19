import React from "react";
import Button from "../components/Button";
import Main from "../components/Main";
import SearchField from "../components/SearchField";
import SongText from "../components/SongText";
import { stringToWordsArray, getLyrics } from "../functions/utils.js";
import Singer from "../functions/singer.js";
const robot = new Singer();

const Home = () => {
  const [artist, setArtist] = React.useState("");
  const [song, setSong] = React.useState("");
  const [searchText, setSearchText] = React.useState({});
  const [songText, setSongText] = React.useState(["Search", "above"]);
  const [position, setPosition] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    const { artist, song } = searchText;
    if (artist && song) {
      (async () => {
        const { lyrics } = await getLyrics(artist, song);
        if (lyrics) {
          setSongText(stringToWordsArray(lyrics));
        } else {
          setSongText(
            stringToWordsArray("Could not find anything, try again!")
          );
        }
      })();
    }
  }, [searchText]);

  React.useEffect(() => {
    (async () => {
      for (let i = position; i < songText.length; i++) {
        if (!playing) {
          break;
        }
        setPosition(i);
        await robot.Sing(songText[i]);
      }
      setPlaying(false);
      setPosition(0);
    })();
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
        buttonText={playing ? "Pause doesn't work yet, sorry!" : "Play"}
      />
      <SongText>
        {songText?.map((word, key) => {
          return (
            <span
              key={key}
              onClick={() => setPosition(key)}
              className={position === key ? "active" : ""}
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
