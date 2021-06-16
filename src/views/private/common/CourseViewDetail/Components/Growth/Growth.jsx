import React from "react";
import Row from "../../../../../../components/common/Row/Row";
import List from "@material-ui/core/List";
import ItemLink from "../../../../../../components/common/ItemLink/ItemLink";
import useFontAwesomeIcon from "../../../../../../hooks/useFontAwesomeIcon";

const data = [
  {
    title: "Sesión de clase N15",
    url: "https://wwww.pruebax.com.pe/text.pdf",
    description:
      "Aquí les adjunto el archivo de la sesión de la clase programada.",
  },
  {
    title: "Qué es la ciencia",
    url: "https://wwww.pruebax.com.pe/text.xlsx",
  },
  {
    title: "Historia de la ciencia",
    url: "https://wwww.pruebax.com.pe/text.ppt",
  },
  {
    title: "Otro texto de prueba, solo para visualización",
    url: "https://wwww.pruebax.com.pe/text.docx",
  },
  {
    title: "xD",
    url: "https://wwww.pruebax.com.pe/text.rar",
  },
];

const Growth = () => {
  const lis = useFontAwesomeIcon(data, "url", "icon");
  return (
    <Row isMargin={false} isPaper>
      <Row.Title>Desarrollo</Row.Title>
      <Row.Content>
        <List>
          {lis.map(({ title, description, icon: { font, color } }) => (
            <ItemLink
              key={title}
              title={title}
              font={font}
              color={color}
              description={description}
            />
          ))}
        </List>
      </Row.Content>
    </Row>
  );
};

export default Growth;
