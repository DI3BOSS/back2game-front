import LogInForm from "../../components/LogInForm/LogInForm";
import logInHero from "../../assets/images/loginHero.jpg";
import LogInPageStyled from "./LogInPageStyled";

const LogInPage = (): JSX.Element => {
  return (
    <LogInPageStyled>
      <div className="login-page__hero-section">
        <img
          src={logInHero}
          alt="hero section"
          className="login-page__hero-image"
        ></img>
      </div>
      <div className="login-page__body">
        <h2 className="login-page__title">
          <span className="login-page__title--highlight">Log In</span>, Bro!
        </h2>
        <p className="login-page__description">
          Write your user and password and manage your own games catalogue.
        </p>
        <LogInForm />
      </div>
    </LogInPageStyled>
  );
};

export default LogInPage;
