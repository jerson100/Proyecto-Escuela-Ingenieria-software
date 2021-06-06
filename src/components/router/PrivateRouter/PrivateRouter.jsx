import React from "react";
import { getAllowedRoutes } from "../../../assets/js/getAllowedRoutes";
import { DASHBOARD_ROUTES } from "../../../const/routes";
import DashboardRouter from "../DashboardRouter/DashboardRouter";

const PrivateRouter = (props) => {
  let allowedRoutes = [];

  //verificamos que el usuario esté logueado de lo contrario lo redireccionamos
  if (true) {
    allowedRoutes = getAllowedRoutes(DASHBOARD_ROUTES.routes);
  } else {
  }
  //   console.log(props);
  return (
    <>
      <DashboardRouter routes={allowedRoutes} />
    </>
  );
};

export default PrivateRouter;
