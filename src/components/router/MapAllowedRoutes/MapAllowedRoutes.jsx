import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const MapAllowedRoutes = ({ routes, basePath, NotFoundComponent }) => {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      {routes.map((route) => {
        const {
          path,
          component: Component,
          children,
          title,
          permission,
          ...rest
        } = route;
        return (
          <Route
            {...rest}
            key={path}
            path={`${match.path.localeCompare("/") == 0 ? "" : "/"}${path}`}
          >
            <Component children={children} />;
          </Route>
        );
      })}
      {NotFoundComponent && (
        <Route>
          <NotFoundComponent />
        </Route>
      )}
    </Switch>
  );
};

export default MapAllowedRoutes;
