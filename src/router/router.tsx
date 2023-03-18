import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import endpoints from "./endpoints";

const routes: RouteObject[] = [
  {
    path: endpoints.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <LogInPage />,
      },
      {
        path: endpoints.myGames,
        element: <HomePage />,
      },
      {
        path: endpoints.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
