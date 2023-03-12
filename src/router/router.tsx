import { createBrowserRouter } from "react-router-dom";
import routes from "./routers";

const appRouter = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);

export default appRouter;
