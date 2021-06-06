import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { capitalize } from "../../../assets/js/text";
import { BreadcrumbsContainer } from "./breadcrumbsContainer.style";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const RouterBreadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <BreadcrumbsContainer
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        value = capitalize(value === "app" ? "Inicio" : value);
        return last ? (
          <Typography color="textPrimary" key={to}>
            {value}
          </Typography>
        ) : (
          <LinkRouter color="inherit" to={to} key={to}>
            {value}
          </LinkRouter>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default RouterBreadcrumbs;
