import React from "react";
import Description from "../Description/Description";
import TeacherList from "../TeacherList/TeacherList";
import ScheduledClass from "../ScheduledClass/ScheduledClass";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const CourseViewContent = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Description />
          <ScheduledClass />
        </Grid>
        <Grid item xs={12} md={4}>
          <TeacherList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(CourseViewContent);
