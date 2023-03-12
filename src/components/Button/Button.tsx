import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({
  className,
  text,
  icon,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
