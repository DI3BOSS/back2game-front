import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import Loader from "../Loader/Loader";
import { ReactComponent as Icon } from "../../assets/icons/xButton.svg";

const Layout = (): JSX.Element => {
  const {
    isLoading,
    feedbackModal: { isWrong, message, title },
  } = useAppSelector((state) => state.ui);

  return (
    <div className="container">
      <header></header>
      <main>
        {isLoading && <Loader />}
        {isWrong && (
          <FeedbackModal title={title} message={message} icon={<Icon />} />
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
