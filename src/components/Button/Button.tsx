import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string;
  icon?: JSX.Element | string;
  ariaLabel?: string;
  onClick?: () => void;
}

const Button = ({
  className,
  text,
  icon,
  ariaLabel,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
