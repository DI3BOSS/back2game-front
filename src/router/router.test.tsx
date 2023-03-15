import { screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import renderWithProviders from "../testUtils";
import { router } from "./router";

describe("Layout component", () => {
  test("renders the NotFoundPage component when the route is not found", () => {
    renderWithProviders(
      <>
        <RouterProvider router={router} />
        <NotFoundPage />
      </>
    );

    const errorMessage = "Page Not Found";

    const expected404ErrorTitle = screen.getByText(errorMessage);

    expect(expected404ErrorTitle).toBeInTheDocument();
  });
});
