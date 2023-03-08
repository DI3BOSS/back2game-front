import ButtonStyled from "./ButtonStyled";
import { ReactComponent as Icon } from "../../assets/icons/rocket.svg";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <Icon />
      {text}
    </ButtonStyled>
  );
};

export default Button;
