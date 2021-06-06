import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useParams } from "react-router";
import RouterBreadcrumbs from "../../../../components/common/RouterBreadcrumbs/RouterBreadcrumbs";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import TeacherList from "./components/TeacherList/TeacherList";
import Trabajo from "./components/Trabajo/Trabajo";

const CourseView = () => {
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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Description />
            <Trabajo />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeacherList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CourseView;
