import React from "react";
import Row from "../../../../../../components/common/Row/Row";
import List from "@material-ui/core/List";
import ItemLink from "../../../../../../components/common/ItemLink/ItemLink";

const lis = [
  {
    title: "Clase en vivo por zoom",
    url: "https://wwww.pruebax.com.pe/text",
    description: "La clase será el día 15 de Enero del 2020 a las 5pm",
  },
];

const VideoConference = () => {
  return (
    <Row isMargin={false} isPaper>
      <Row.Title>VideoConferencia</Row.Title>
      <Row.Content>
        <List>
          {lis.map(({ title, description }) => (
            <ItemLink
              key={title}
              title={title}
              font="fas fa-video"
              color="red"
              description={description}
            />
          ))}
        </List>
      </Row.Content>
    </Row>
  );
};

export default VideoConference;
