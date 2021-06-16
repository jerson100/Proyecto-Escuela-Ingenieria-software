import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { Icon, Fab } from "@material-ui/core";
import Color from "color";
import { Link as LinkRouter } from "react-router-dom";

import {
  ClassContainer,
  ClassItem,
  ClassTime,
  ClassIconContainer,
  ClassLink,
} from "./scheduledClass.style";

import { Typography, Grid } from "@material-ui/core";

const ScheduledClass = ({
  user,
  date,
  title,
  icon,
  color,
  isLink,
  idScheduledClass,
}) => {
  const bg = useMemo(() => {
    const { r, g, b } = Color(color).object();
    return `rgba(${r},${g},${b},0.19)`;
  }, [color]);

  return (
    <ClassItem>
      <article>
        <ClassContainer variant="outlined">
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <ClassIconContainer bg={bg} color={color}>
                <Icon className={icon} color={"inherit"} />
              </ClassIconContainer>
            </Grid>
            <Grid item xs={true}>
              <Typography
                variant="subtitle1"
                component="h1"
                color="textPrimary"
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="textSecondary"
              >
                <ClassTime datetime="2001-05-15T19:00">
                  15 de Mayo del 2015 a las 3:00 PM
                </ClassTime>
              </Typography>
            </Grid>
            {isLink && (
              <Grid item>
                <LinkRouter
                  to={{
                    pathname: `/app/course/1/detail/${idScheduledClass}`,
                  }}
                >
                  <Fab color="primary" aria-label="add" size="small">
                    <ClassLink className="fas fa-arrow-right" />
                  </Fab>
                </LinkRouter>
              </Grid>
            )}
          </Grid>
        </ClassContainer>
      </article>
    </ClassItem>
  );
};

ScheduledClass.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    urlImage: PropTypes.string,
    link: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  bg: PropTypes.string,
  isLink: PropTypes.bool,
};

ScheduledClass.defaultProps = {
  title: "Ingrese un título",
  color: "white",
  icon: "fa fa-plus-circle",
  isLink: false,
};

export default memo(ScheduledClass);
