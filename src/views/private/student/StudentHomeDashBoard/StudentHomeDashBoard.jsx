import React from "react";
import { Container } from "@material-ui/core";
import StudentCourses from "./components/StudentCourse/StudentCourses";
import { StudentHomeDashboard, Title } from "./studentHomeDashboard.style.js";
import RouterBreadcrumbs from "../../../../components/common/RouterBreadcrumbs/RouterBreadcrumbs";
import Hello from "../../../../components/common/Hello/Hello";

import img from "../../../../assets/svg/student.svg";
import Row from "../../../../components/common/Row/Row";

const StudentHomeDashBoard = () => {
  return (
    <StudentHomeDashboard>
      <Container>
        <RouterBreadcrumbs />
      </Container>
      <Title component="h1">Home</Title>
      <Row>
        <Container>
          <Hello
            image={img}
            title="Bienvenido Jerson Ramírez"
            description="Aquí tienes que poner una descripción de bienvenida para los usuarios que acceden al sistema"
            backgroundColor="red"
          />
        </Container>
      </Row>
      <StudentCourses />
    </StudentHomeDashboard>
  );
};

export default StudentHomeDashBoard;
