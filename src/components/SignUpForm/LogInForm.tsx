import Button from "../Button/Button";
import { ReactComponent as Icon } from "../../assets/icons/rocket.svg";
import LogInFormStyled from "./LogInFormStyled";

interface LogInformProps {
  userIcon?: JSX.Element;
  passwordIcon?: JSX.Element;
}

const buttonText = "Log in!";

const LogInForm = ({ userIcon, passwordIcon }: LogInformProps): JSX.Element => {
  return (
    <LogInFormStyled>
      <div className="login-form__field">
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="username"
          name="username"
          className="login-form__input"
          placeholder="username"
          required
        ></input>
      </div>
      <div className="login-form__field">
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          className="login-form__input"
          placeholder="password"
          required
        ></input>
      </div>

      <Button text={buttonText} icon={<Icon />} />
    </LogInFormStyled>
  );
};
export default LogInForm;
