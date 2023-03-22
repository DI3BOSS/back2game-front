import useToken from "../../hooks/useToken/useToken";
import {
  showFeedbackActionCreator,
  toggleBurguerMenuActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { logOutUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BurguerMenuStyled from "./BurguerMenuStyled";

interface BurguerMenuProps {
  className?: string;
}

const BurguerMenu = ({ className }: BurguerMenuProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.user);

  const { removeToken } = useToken();

  const handleLogOut = () => {
    removeToken();
    dispatch(
      showFeedbackActionCreator({
        title: "Done!",
        message: "See you next time!",
        isSuccess: true,
        isWrong: false,
      })
    );
    dispatch(logOutUserActionCreator());
  };

  const {
    toggleBurguer: { isOpen },
  } = useAppSelector((state) => state.ui);

  const handleOpen = () => {
    dispatch(toggleBurguerMenuActionCreator({ isOpen: true }));
  };
  const handleClose = () => {
    dispatch(toggleBurguerMenuActionCreator({ isOpen: false }));
  };

  return (
    <BurguerMenuStyled className={className}>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="burguer"
          aria-label="burguer menu"
        >
          <svg
            width="50"
            height="45"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="burguer-menu"
          >
            <path
              className="burguer__meat"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 12.5C3.5 12.0858 3.89175 11.75 4.375 11.75H23.625C24.1082 11.75 24.5 12.0858 24.5 12.5C24.5 12.9142 24.1082 13.25 23.625 13.25H4.375C3.89175 13.25 3.5 12.9142 3.5 12.5Z"
              fill="white"
            />
            <path
              className="burguer__top-bread"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 6.5C3.5 6.08579 3.89175 5.75 4.375 5.75H17.5C17.9832 5.75 18.375 6.08579 18.375 6.5C18.375 6.91421 17.9832 7.25 17.5 7.25H4.375C3.89175 7.25 3.5 6.91421 3.5 6.5Z"
              fill="white"
            />
            <path
              className="burguer__bottom-bread"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 18.5C3.5 18.0858 3.89175 17.75 4.375 17.75H17.5C17.9832 17.75 18.375 18.0858 18.375 18.5C18.375 18.9142 17.9832 19.25 17.5 19.25H4.375C3.89175 19.25 3.5 18.9142 3.5 18.5Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <>
          <button onClick={handleClose} className="close">
            <span></span>
            <svg
              className="burguer__closer"
              width="45"
              height="45"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="burguer-menu-close"
            >
              <path
                d="M12.99 9.012L13.83 8.172M8.17 13.828L10.92 11.078M13.83 13.832L8.17 8.172M1 11.96V14C1 19 3 21 8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="menu-switcher" onClick={handleClose}>
            <div className="menu">
              {!username && (
                <a href="/login" className="login">
                  Log in, bro!
                </a>
              )}
              {username && (
                <>
                  <span
                    className="login"
                    onClick={() => handleLogOut()}
                    data-testid="logout"
                  >
                    Let's Log out!
                  </span>
                  <a href="/games/upload" className="upload">
                    Upload you game!
                  </a>
                </>
              )}
              <a href="/" className="home">
                Back to home!
              </a>
            </div>
          </div>
        </>
      )}
    </BurguerMenuStyled>
  );
};

export default BurguerMenu;
