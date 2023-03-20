import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import LogInPage from "../pages/FormPages/LogInPage/LogInPage";
import UploadPage from "../pages/FormPages/UploadPage/UploadPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import endpoints from "./endpoints";

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
        path: endpoints.uploadGame,
        element: <UploadPage />,
      },
      {
        path: endpoints.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
