import Button from "../Button/Button";
import FeedbackModalStyled from "./FeedbackModalStyled";

interface FeedBackModalProps {
  title?: string;
  message?: string;
  icon?: JSX.Element;
}

const FeedbackModal = ({
  title,
  message,
  icon,
}: FeedBackModalProps): JSX.Element => {
  return (
    <FeedbackModalStyled>
      <span className="modal-feedback__message">
        <div className="modal-feedback__head">
          <span className="modal-feedback__title">{title}</span>
          <Button icon={icon} className={"modal-feedback__close-button"} />
        </div>
        <span>{message}</span>
      </span>
    </FeedbackModalStyled>
  );
};

export default FeedbackModal;
