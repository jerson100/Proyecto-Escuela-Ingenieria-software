import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import Visibility from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(4),
  },
}));

const FormLogin = () => {
  const classes = useStyles();
  return (
    <form>
      <FormControl
        fullWidth
        className={classes.margin}
        variant="outlined"
        color="secondary"
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-username"
          //   value={values.amount}
          //   onChange={handleChange("amount")}
          //   startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={75}
        />
      </FormControl>
      <FormControl
        fullWidth
        className={classes.margin}
        variant="outlined"
        color="secondary"
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          // type={values.showPassword ? 'text' : 'password'}
          type={"password"}
          // value={values.password}
          // onChange={handleChange('password')}

          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                {<Visibility />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Typography
        align="right"
        color="textSecondary"
        variant="body2"
        className={classes.margin}
      >
        Olvidé mi contraseña
      </Typography>
      <Button variant="contained" color="secondary" fullWidth>
        Acceder
      </Button>
    </form>
  );
};

export default FormLogin;
