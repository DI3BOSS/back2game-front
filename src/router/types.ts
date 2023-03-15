interface Routes {
  logIn: string;
  myGames: string;
  root: string;
  notFound: string;
}

const endpoints: Routes = {
  logIn: "login",
  myGames: "my-games",
  root: "/",
  notFound: "*",
};

export default endpoints;
