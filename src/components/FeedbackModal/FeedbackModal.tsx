import { showFeedbackActionCreator } from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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
  const {
    feedbackModal: { isWrong },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(showFeedbackActionCreator({ isWrong: false }));
  };

  return (
    <>
      {isWrong && (
        <FeedbackModalStyled onClick={handleClose}>
          <span className="modal-feedback__message">
            <div className="modal-feedback__head">
              <span className="modal-feedback__title">{title}</span>
              <Button icon={icon} className={"modal-feedback__close-button"} />
            </div>
            <span>{message}</span>
          </span>
        </FeedbackModalStyled>
      )}
    </>
  );
};

export default FeedbackModal;
