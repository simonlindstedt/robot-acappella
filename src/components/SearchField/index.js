import { StyledSearchWrapper, StyledSearchField } from "./styles.js";

const SearchField = ({ handleChange, label }) => {
  return (
    <StyledSearchWrapper>
      <label htmlFor={label}>{label}</label>
      <StyledSearchField onChange={handleChange} id={label} />
    </StyledSearchWrapper>
  );
};

export default SearchField;
