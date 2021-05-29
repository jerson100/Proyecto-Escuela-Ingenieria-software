import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import Route from "../models/route";
import Home from "../views/private/common/Home/Home";
import Login from "../views/public/Login/Login";

/*
        RBAC V1
        Gracias a Umair Ahmed Khanzada =→ https://medium.com/@umairkz52
        documentation: https://medium.com/@umairkz52/role-based-authorization-role-based-access-control-in-react-js-65c05a372ca8

        RBAC V2
        Gracias a Umair Ahmed Khanzada =→ https://medium.com/@umairkz52
        documentation: https://javascript.plainenglish.io/role-based-authorization-role-based-access-control-v-2-in-react-js-cb958e338f4b
*/

/*
    BASE PATH -> APP
*/
export const DASHBOARD_ROUTES = {
  layout: DashboardLayout,
  routes: new Route(
    "/",
    [
      //   new Route("/", [], Home, "Inicio", [roles.TEACHER], true),
      //   new Route("/", [], Home, true, "Inicio", null),
    ],
    Home,
    "Inicio",
    [],
    //   [roles.ADMIN, roles.STUDENT, roles.STUDENT],
    true
  ),
};

export const HOMEPAGE_ROUTES = [new Route("/login", [], Login, [], "", true)];
