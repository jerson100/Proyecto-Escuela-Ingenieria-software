import { Avatar } from "@material-ui/core";
import React from "react";
import Row from "../../../../../../components/common/Row/Row";
import { TeacherListStyle } from "./teacherList.style";

const TeacherList = () => {
  return (
    <Row>
      <Row.Title variant="h5">Profesores</Row.Title>
      <Row.Content>
        <TeacherListStyle>
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(
            (val, i) => {
              return (
                <Avatar
                  key={i}
                  alt="Remy Sharp"
                  src={`https://material-ui.com/static/images/avatar/${val}.jpg`}
                />
              );
            }
          )}
        </TeacherListStyle>
      </Row.Content>
    </Row>
  );
};

export default TeacherList;
