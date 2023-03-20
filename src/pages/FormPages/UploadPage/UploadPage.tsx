import FormPageStyled from "../FormPageStyled";
import logInHero from "../../../assets/images/loginHero.jpg";
import UploadGameFrom from "../../../components/Form/UpaloadGameForm/UploadGameForm";

const UploadPage = (): JSX.Element => {
  return (
    <FormPageStyled className="upload-page form-page">
      <div className="form-page__hero-section">
        <img
          src={logInHero}
          alt="hero section"
          className="form-page__hero-image"
        ></img>
      </div>
      <div className="form-page__body">
        <h2 className="form-page__title">
          <span className="form-page__title--highlight">Upaload</span> A Game!
        </h2>
        <p className="form-page__description">
          Upload your own games and start to sell them right now in our
          marketplace.
        </p>
        <UploadGameFrom />
      </div>
    </FormPageStyled>
  );
};

export default UploadPage;
