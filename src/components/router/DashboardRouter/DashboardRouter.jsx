import React from "react";
import { useRouteMatch } from "react-router";
import { DASHBOARD_ROUTES } from "../../../const/routes";
import NotFound from "../../../views/public/NotFound/NotFound";
import MapAllowedRoutes from "../MapAllowedRoutes/MapAllowedRoutes";

const DashboardRouter = ({ routes }) => {
  const { layout: Layout } = DASHBOARD_ROUTES;
  const match = useRouteMatch("/app");
  return (
    <>
      <Layout>
        <MapAllowedRoutes
          routes={routes}
          basePath={`${match.path}`}
          isAddNotFound
          NotFoundComponent={NotFound}
        />
      </Layout>
    </>
  );
};

export default DashboardRouter;
