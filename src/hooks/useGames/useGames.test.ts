import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import useGames from "./useGames";

const moduleName = "../../store/hooks";

const mockedDispatcher = jest.fn();

jest.mock(moduleName, () => ({
  ...jest.requireActual(moduleName),
  useAppDispatch: () => mockedDispatcher,
}));

describe("Give the useGames custom hook", () => {
  describe("When its 'getGames' function is called", () => {
    test("Then it should dispatch the action of load games", async () => {
      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await act(async () => getGames());

      expect(mockedDispatcher).toBeCalled();
    });
  });
});
