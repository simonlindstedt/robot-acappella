import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  color: black;
  background-color: unset;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 7px 0px;
  border: none;
  border-radius: 2px;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  margin: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 7px 2px;
  }
  &:active {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 7px 0px;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: lightgray;
    outline-style: auto;
  }
`;
