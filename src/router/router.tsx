import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: endpoints.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: endpoints.logIn,
        element: <LogInPage />,
      },
      {
        path: endpoints.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
