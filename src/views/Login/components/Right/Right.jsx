import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { LoginRight, Header } from "../../loginStyle";
import SocialNetwork from "./components/SocialNetwork/SocialNetwork";
import FormLogin from "./components/FormLogin/FormLogin";

const Right = () => {
  return (
    <Grid item xs={12} sm={5}>
      <LoginRight>
        <Header>
          <Typography align="center" color="textPrimary">
            Hola
          </Typography>
          <Typography align="center" color="textSecondary" variant="body2">
            Inicie sesión con su cuenta
          </Typography>
        </Header>
        <FormLogin />
        <SocialNetwork />
      </LoginRight>
    </Grid>
  );
};

export default Right;
