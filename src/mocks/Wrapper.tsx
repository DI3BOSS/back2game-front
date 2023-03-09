import { store } from "../store";
import { Provider } from "react-redux";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}> {children}</Provider>
);

export default Wrapper;
