import Button from "./components/Button/Button";
import { ReactComponent as Icon } from "./assets/icons/rocket.svg";

const buttonText = "Sign up!";

const App = (): JSX.Element => {
  return <Button text={buttonText} icon={<Icon />} />;
};

export default App;
