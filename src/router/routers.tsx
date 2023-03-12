import { RouteObject } from "react-router-dom";
import App from "../App";
import LogInPage from "../pages/LogInPage/LogInPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LogInPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
