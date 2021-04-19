import styled from "styled-components";

export const StyledSongWrapper = styled.section`
  padding: 24px;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 640px;
  margin: 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 10px 0px;
  span {
    transition: background-color 0.5s ease;
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    &:hover {
      background-color: yellow;
    }
    &.active {
      background-color: yellow;
    }
  }
`;
