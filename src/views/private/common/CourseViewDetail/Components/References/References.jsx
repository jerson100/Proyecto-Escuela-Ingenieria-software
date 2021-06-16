import React from "react";
import Row from "../../../../../../components/common/Row/Row";
import List from "@material-ui/core/List";
import ItemLink from "../../../../../../components/common/ItemLink/ItemLink";

const data = [
  {
    title: "Wikipedia",
    url: "https://wwww.pruebax.com.pe/text.pdf",
  },
  {
    title: "Qué es la ciencia - Lima -xD",
    url: "https://wwww.pruebax.com.pe/text.xlsx",
    description: "lorem lorem lorwqmedjqowd qwdm qwd qwdoqwd mqwd qwmd qw qwdq",
  },
  {
    title: "Historia de la ciencia",
    url: "https://wwww.pruebax.com.pe/text.ppt",
  },
  {
    title: "Otro texto de prueba, solo para visualización",
    url: "https://wwww.pruebax.com.pe/text.docx",
    description: "lorem lorem lorwqmedjqowd qwdm qwd qwdoqwd mqwd qwmd qw qwdq",
  },
];

const References = () => {
  return (
    <Row isMargin={false} isPaper>
      <Row.Title>Referencias</Row.Title>
      <Row.Content>
        <List>
          {data.map(({ title, description }) => (
            <ItemLink
              key={title}
              title={title}
              description={description}
              font="fas fa-globe-americas"
              color="rgb(21, 170, 191)"
            />
          ))}
        </List>
      </Row.Content>
    </Row>
  );
};

export default References;
