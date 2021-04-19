import { StyledSongWrapper } from "./styles.js";

const SongText = ({ children }) => {
  return (
    <StyledSongWrapper>
      <p>{children}</p>
    </StyledSongWrapper>
  );
};

export default SongText;
