import Button from "../Button/Button";
import { ReactComponent as Icon } from "../../assets/icons/rocket.svg";
import SignUpFormStyled from "./SignUpFormStyled";

interface SignUpformProps {
  userIcon?: JSX.Element;
  passwordIcon?: JSX.Element;
}

const buttonText = "Sign up!";

const SignUpForm = ({
  userIcon,
  passwordIcon,
}: SignUpformProps): JSX.Element => {
  return (
    <SignUpFormStyled>
      <div className="signup-form__field">
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="username"
          name="username"
          className="signup-form__input"
          placeholder="username"
          required
        ></input>
      </div>
      <div className="signup-form__field">
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          className="signup-form__input"
          placeholder="password"
          required
        ></input>
      </div>

      <Button text={buttonText} icon={<Icon />} />
    </SignUpFormStyled>
  );
};
export default SignUpForm;
