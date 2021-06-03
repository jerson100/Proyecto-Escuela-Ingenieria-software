import React from "react";
import { Container } from "@material-ui/core";
import StudentCourses from "./components/StudentCourse/StudentCourses";
import { StudentHomeDashboard } from "./studentHomeDashboard.style.";

const StudentHomeDashBoard = () => {
  return (
    <StudentHomeDashboard>
      <Container>
        <StudentCourses />
      </Container>
    </StudentHomeDashboard>
  );
};

export default StudentHomeDashBoard;
