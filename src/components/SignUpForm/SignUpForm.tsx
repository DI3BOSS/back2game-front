import Button from "../Button/Button";

import { ReactComponent as Icon } from "../../assets/icons/rocket.svg";

const buttonText = "Sign up!";

const SignUpForm = (): JSX.Element => {
  return (
    <>
      <div className="signup-form__field">
        <label htmlFor="username"></label>
        <input
          id="username"
          type="username"
          name="username"
          className="signup-form__input"
          placeholder="Introduce your username"
          required
        ></input>
      </div>
      <div className="signup-form__field">
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          name="password"
          className="signup-form__input"
          placeholder="Introduce your password"
          required
        ></input>
      </div>

      <Button text={buttonText} icon={<Icon />} />
    </>
  );
};
export default SignUpForm;
