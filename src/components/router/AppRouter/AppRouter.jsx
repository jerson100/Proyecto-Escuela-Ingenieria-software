import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import Login from "../../../views/Login/Login";
import NavigationMenu from "../../../components/layout/NavigationMenu/NavigationMenu";

const AppRouter = () => {
  return (
    <Router>
      <NavigationMenu />
      {/* <Switch>
        <Login />
      </Switch> */}
    </Router>
  );
};

export default AppRouter;
