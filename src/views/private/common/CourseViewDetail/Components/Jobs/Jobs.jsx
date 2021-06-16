import React from "react";
import Row from "../../../../../../components/common/Row/Row";
import List from "@material-ui/core/List";
import ItemLink from "../../../../../../components/common/ItemLink/ItemLink";

const lis = [
  {
    title: "Problemas, Objetivos, atividades de nose...",
    url: "https://wwww.pruebax.com.pe/text",
    description: "Plazo para subir la tarea - Martes 13 hasta las 11:20PM",
  },
  {
    title: "Problemas, Objetivos, atividades de nose...2",
    url: "https://wwww.pruebax.com.pe/text",
    description: "Plazo para subir la tarea - Martes 13 hasta las 11:20PM",
  },
  {
    title: "Problemas, Objetivos, atividades de nose...3",
    url: "https://wwww.pruebax.com.pe/text",
    description: "Plazo para subir la tarea - Martes 13 hasta las 11:20PM",
  },
];

const Jobs = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Row isMargin={false} isPaper>
      <Row.Title>Trabajos</Row.Title>
      <Row.Content>
        <List>
          {lis.map(({ title, description, url }) => (
            <ItemLink
              key={title}
              title={title}
              font="fas fa-book"
              color="rgb(238, 194, 143)"
              description={description}
              handleClick={(evt) => handleClick(url)}
            />
          ))}
        </List>
      </Row.Content>
    </Row>
  );
};

export default Jobs;
