import { Container, Grid } from "@material-ui/core";
import React, { useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Course from "../../../../../../components/common/Course/Course";
import Row from "../../../../../../components/common/Row/Row";

const StudentCourses = () => {
  const { push } = useHistory();
  const { path } = useRouteMatch();

  const handleContainerClick = useCallback(
    (url) => {
      if (url) {
        push(`${path}${url}`);
      }
    },
    [path, push]
  );
  return (
    <Row>
      <Container>
        <Row.Title component="h1" variant="h4">
          Mis cursos
        </Row.Title>
        <Row.Content>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
              <Grid item sm={12} md={6} lg={3} key={i}>
                <Course
                  number={i + 1}
                  path={`course/${e}`}
                  title="Cálculo diferencial"
                  coverImage="https://sites.google.com/site/barriosmatrixhuapen/_/rsrc/1518575823053/home/banner-calculo-diferencial.png"
                  description={
                    "El cálculo diferencial es una parte del cálculo infinitesimal y del análisis matemático que estudia cómo cambian las funciones continuas según sus variables cambian de estado."
                  }
                  handleContainerClick={handleContainerClick}
                />
              </Grid>
            ))}
          </Grid>
        </Row.Content>
      </Container>
    </Row>
  );
};

export default StudentCourses;
