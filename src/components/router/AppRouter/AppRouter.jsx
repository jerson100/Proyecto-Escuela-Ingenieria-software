import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
// import Login from "../../../views/Login/Login";
// import NavigationMenu from "../../../components/layout/NavigationMenu/NavigationMenu";
import PublicRouter from "../PublicRouter/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      {/* <NavigationMenu /> */}
      <Switch>
        <Route path="/app" component={PrivateRouter} />
        <Route path="/" component={PublicRouter} />
      </Switch>
      {/* <Switch>
        <Login />
      </Switch> */}
    </Router>
  );
};

export default AppRouter;
