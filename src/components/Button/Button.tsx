import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string;
  icon?: JSX.Element;
}

const Button = ({ className, text, icon }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className}>
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
