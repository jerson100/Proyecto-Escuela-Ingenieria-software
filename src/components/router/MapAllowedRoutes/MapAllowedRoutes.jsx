import React, { memo } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const MapAllowedRoutes = ({
  routes,
  basePath,
  NotFoundComponent,
  isAddNotFound,
}) => {
  const match = useRouteMatch(basePath);

  if (!match) {
    return (
      <Route>
        <NotFoundComponent />
      </Route>
    );
  }
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
            path={`${
              match.path.localeCompare("/") === 0 ? "" : match.path
            }${path}`}
          >
            <Component children={children} />
          </Route>
        );
      })}
      {isAddNotFound && NotFoundComponent && (
        <Route>
          <NotFoundComponent />
        </Route>
      )}
    </Switch>
  );
};

export default memo(MapAllowedRoutes);
