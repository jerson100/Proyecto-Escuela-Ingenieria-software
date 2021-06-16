import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import RouterBreadcrumbs from "../../../../components/common/RouterBreadcrumbs/RouterBreadcrumbs";
import Banner from "./components/Banner/Banner";
import MapAllowedRoutes from "../../../../components/router/MapAllowedRoutes/MapAllowedRoutes";
import CourseViewContent from "./components/CourseViewContent/CourseViewContent";

const CourseView = ({ children }) => {
  const { id } = useParams();
  return (
    <>
      <Banner>
        <Typography component="h1" variant="h3">
          {id}
        </Typography>
      </Banner>
      <Container>
        <RouterBreadcrumbs />
      </Container>
      <CourseViewContent />
      <MapAllowedRoutes routes={children} />
    </>
  );
};

export default React.memo(CourseView);
