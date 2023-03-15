import { toggleBurguerMenuActionCreator } from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BurguerMenuStyled from "./BurguerMenuStyled";

const BurguerMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();

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
    <BurguerMenuStyled>
      {!isOpen && (
        <button onClick={handleOpen} className="burguer">
          ☰
        </button>
      )}
      {isOpen && (
        <>
          <button onClick={handleClose} className="close">
            <span></span>
            <span>X</span>
          </button>
          <div className="menu">
            <a href="/login" className="login">
              Log in, bro!
            </a>
            <a href="/" className="home">
              {" "}
              Back to home!
            </a>
          </div>
        </>
      )}
    </BurguerMenuStyled>
  );
};

export default BurguerMenu;
