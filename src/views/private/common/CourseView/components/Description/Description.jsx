import { Typography } from "@material-ui/core";
import React from "react";
import Row from "../../../../../../components/common/Row/Row";

const Description = () => {
  return (
    <Row>
      <Row.Title variant="h5">Descripción</Row.Title>
      <Row.Content>
        <Typography variant="body2" component="p" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          assumenda odit soluta quisquam praesentium, doloremque distinctio,
          fuga sapiente sequi, quidem impedit hic non amet nobis ratione
          delectus autem quod ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci assumenda odit soluta quisquam praesentium,
          doloremque distinctio, fuga sapiente sequi, quidem impedit hic non
          amet nobis ratione delectus autem quod ea? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci assumenda odit soluta quisquam
          praesentium, doloremque distinctio, fuga sapiente sequi, quidem
          impedit hic non amet nobis ratione delectus autem quod ea? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Adipisci assumenda odit
          soluta quisquam praesentium, doloremque distinctio, fuga sapiente
          sequi, quidem impedit hic non amet nobis ratione delectus autem quod
          ea?
        </Typography>
      </Row.Content>
    </Row>
  );
};

export default Description;
