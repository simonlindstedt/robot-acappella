import { StyledSongWrapper } from "./styles.js";

const SongText = ({ words, highlight, position }) => {
  return (
    <StyledSongWrapper>
      <p>
        {words?.map((word, key) => {
          return (
            <span
              key={key}
              className={key === highlight ? "active" : ""}
              onClick={position}
            >
              {word}{" "}
            </span>
          );
        })}
      </p>
    </StyledSongWrapper>
  );
};

export default SongText;
