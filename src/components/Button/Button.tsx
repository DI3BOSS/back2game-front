import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
}

const Button = ({ text, icon }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
