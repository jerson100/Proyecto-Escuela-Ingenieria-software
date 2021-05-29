import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Login from "../../../views/Login/Login";
import NavigationMenu from "../../../components/layout/NavigationMenu/NavigationMenu";
import PublicRouter from "../PublicRouter/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      {/* <NavigationMenu /> */}
      <PublicRouter />
      {/* <Switch>
        <Login />
      </Switch> */}
    </Router>
  );
};

export default AppRouter;
