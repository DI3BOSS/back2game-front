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
    feedbackModal: { isWrong, isSuccess },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(showFeedbackActionCreator({ isWrong: false, isSuccess: false }));
  };

  return (
    <>
      {(isWrong || isSuccess) && (
        <FeedbackModalStyled onClick={handleClose}>
          <span className="modal-feedback__message">
            <div className="modal-feedback__head">
              <span
                className={`modal-feedback__title--${isWrong && "wrong"}${
                  isSuccess && "success"
                }`}
              >
                {title}
              </span>
              <Button
                icon={
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isSuccess && (
                      <path
                        className="close-button"
                        d="M30.975 21.03L33.075 18.93M18.925 33.07L25.8 26.195M33.075 33.08L18.925 18.93M6 11C2.875 15.175 1 20.375 1 26C1 39.8 12.2 51 26 51C39.8 51 51 39.8 51 26C51 12.2 39.8 1 26 1C22.425 1 19 1.75 15.925 3.125"
                        stroke="#00b4d6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {isWrong && (
                      <path
                        className="close-button"
                        d="M30.975 21.03L33.075 18.93M18.925 33.07L25.8 26.195M33.075 33.08L18.925 18.93M6 11C2.875 15.175 1 20.375 1 26C1 39.8 12.2 51 26 51C39.8 51 51 39.8 51 26C51 12.2 39.8 1 26 1C22.425 1 19 1.75 15.925 3.125"
                        stroke="#e63f8d"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                }
                className={"modal-feedback__close-button"}
              />
            </div>
            <span>{message}</span>
          </span>
        </FeedbackModalStyled>
      )}
    </>
  );
};

export default FeedbackModal;
