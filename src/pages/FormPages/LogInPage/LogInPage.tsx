import LogInForm from "../../../components/Form/LogInForm/LogInForm";
import logInHero from "../../../assets/images/loginHero.jpg";
import FormPageStyled from "../FormPageStyled";

const LogInPage = (): JSX.Element => {
  return (
    <FormPageStyled className="login-page form-page">
      <div className="form-page__hero-section">
        <img
          src={logInHero}
          alt="hero section"
          className="form-page__hero-image"
        ></img>
      </div>
      <div className="form-page__body">
        <h2 className="form-page__title">
          <span className="form-page__title--highlight">Log In</span>, Bro!
        </h2>
        <p className="form-page__description">
          Write your user and password and manage your own games catalogue.
        </p>
        <LogInForm />
      </div>
    </FormPageStyled>
  );
};

export default LogInPage;
