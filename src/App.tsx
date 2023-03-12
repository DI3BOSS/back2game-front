import FeedbackModal from "./components/FeedbackModal/FeedbackModal";
import Loader from "./components/Loader/Loader";
import { useAppSelector } from "./store/hooks";
import { ReactComponent as Icon } from "./assets/icons/xButton.svg";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  const {
    isLoading,
    feedbackModal: { isWrong, message, title },
  } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loader />}
      {isWrong && (
        <FeedbackModal title={title} message={message} icon={<Icon />} />
      )}
      <Layout />
    </>
  );
};

export default App;
