import styled from "styled-components";

export const StyledSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  label {
    margin-bottom: 8px;
  }
`;

export const StyledSearchField = styled.input`
  padding: 8px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px 0px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px 1px;
  }
  &:focus,
  &:focus-visible {
    outline-color: lightgray;
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 12px 5px;
  }
`;
