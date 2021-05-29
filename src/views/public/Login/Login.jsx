import React from "react";
import Grid from "@material-ui/core/Grid";

import { LoginContainer, LoginCircle, LoginContent } from "./loginStyle";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent maxWidth="md">
        <Grid container alignItems="center" spacing={0}>
          <Left />
          <Right />
        </Grid>
      </LoginContent>
      <LoginCircle
        location={{ x: "100%", y: 0 }}
        size={{ width: "40vw", height: "40vw" }}
      />
      <LoginCircle
        location={{ x: 0, y: "100%" }}
        size={{ width: "40vw", height: "40vw" }}
      />
    </LoginContainer>
  );
};

export default Login;
