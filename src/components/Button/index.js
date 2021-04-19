import { ButtonStyled } from "./styles.js";

const Button = ({ buttonText, handleClick }) => {
  return <ButtonStyled onClick={handleClick}>{buttonText}</ButtonStyled>;
};

export default Button;
