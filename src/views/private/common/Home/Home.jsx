import React from "react";
import AdminHomeDashBoard from "../../administrator/AdminHomeDashBoard/AdminHomeDashBoard";
import StudentHomeDashBoard from "../../student/StudentHomeDashBoard/StudentHomeDashBoard";
import TeacherHomeDashBoard from "../../teacher/TeacherHomeDashBoard/TeacherHomeDashBoard";

const Home = (props) => {
  //dependiendo el tipo que accede al sistema mostramos un componente Home distinto.
  const type_user = 2;
  switch (type_user) {
    case 1:
      return <AdminHomeDashBoard />;
    case 2:
      return <StudentHomeDashBoard />;
    default:
      return <TeacherHomeDashBoard />;
  }
};

export default Home;
