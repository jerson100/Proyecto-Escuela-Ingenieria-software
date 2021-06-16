import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import Route from "../models/route";
import Home from "../views/private/common/Home/Home";
import HomeIcon from "@material-ui/icons/Home";
import Login from "../views/public/Login/Login";
import CourseView from "../views/private/common/CourseView/CourseView";
import CourseViewDetail from "../views/private/common/CourseViewDetail/CourseViewDetail";

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
  routes: [
    new Route(
      "/",
      [
        // new Route(
        //   "/course",
        //   [new Route("/15", [], Home, true, "15", null)],
        //   Home,
        //   "Course",
        //   [],
        //   true
        // ),
        //   new Route("/", [], Home, true, "Inicio", null),
      ],
      Home,
      [],
      "Inicio",
      //   [roles.ADMIN, roles.STUDENT, roles.STUDENT],
      true,
      HomeIcon
    ),
    new Route(
      "/course/:id",
      [
        new Route(
          "/detail/:idDetail",
          [],
          CourseViewDetail,
          [],
          "detail",
          true,
          null,
          false
        ),
      ],
      CourseView,
      [],
      "Curso",
      //   [roles.ADMIN, roles.STUDENT, roles.STUDENT],
      false,
      HomeIcon,
      false
    ),
  ],
};

export const HOMEPAGE_ROUTES = [new Route("/login", [], Login, [], "", true)];
