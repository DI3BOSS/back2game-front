import { Outlet } from "react-router-dom";
const Layout = (): JSX.Element => {
  return (
    <div className="container">
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
