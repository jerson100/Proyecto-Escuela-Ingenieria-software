import React from "react";
import { HOMEPAGE_ROUTES } from "../../../const/routes";
import NotFound from "../../../views/public/NotFound/NotFound";
import MapAllowedRoutes from "../MapAllowedRoutes/MapAllowedRoutes";

const PublicRouter = () => {
  console.log("public");
  return (
    <>
      <MapAllowedRoutes
        routes={HOMEPAGE_ROUTES}
        basePath="/"
        isAddNotFound
        NotFoundComponent={NotFound}
      />
    </>
  );
};

export default PublicRouter;
