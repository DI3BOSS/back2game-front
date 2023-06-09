import { SyntheticEvent, useState } from "react";
import { ReactComponent as Icon } from "../../../assets/icons/rocket.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/lock.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import Button from "../../Button/Button";
import { UserLoginCredentials } from "../../../types";
import useUser from "../../../hooks/useUser/useUser";
import FormStyled from "../FormStyled";

const LogInForm = (): JSX.Element => {
  const { logInUser } = useUser();

  const initialLoginState: UserLoginCredentials = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialLoginState);

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    await logInUser(formData);
    setFormData(initialLoginState);
  };

  return (
    <FormStyled onSubmit={handleSubmitForm} className="login-form form">
      <div className="login-form-type">
        <label htmlFor="username" className="form__field">
          <i className="icon">{<UserIcon />}</i>
          <input
            onChange={handleChangeEvent}
            value={formData.username}
            id="username"
            type="username"
            name="username"
            className="form__input"
            placeholder="username"
            autoFocus
            required
          ></input>
        </label>
        <label htmlFor="password" className="form__field">
          <i className="icon">{<LockIcon />}</i>
          <input
            onChange={handleChangeEvent}
            value={formData.password}
            id="password"
            type="password"
            name="password"
            className="form__input"
            placeholder="password"
            required
          ></input>
        </label>

        <Button text="Log in!" icon={<Icon />} className={"submit"} />
      </div>
    </FormStyled>
  );
};
export default LogInForm;
