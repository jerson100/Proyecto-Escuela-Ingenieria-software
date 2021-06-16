import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Growth from "./Components/Growth/Growth";
import References from "./Components/References/References";
import VideoConference from "./Components/VideoConference/VideoConference";
import Jobs from "./Components/Jobs/Jobs";

import {
  CourseViewDetailStyle,
  ContentDetailStyle,
} from "./courseViewDetail.style.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseViewDetail = () => {
  const classes = useStyles();
  const { id, idDetail } = useParams();

  const [showModal, setShowModal] = useState(true);
  const { push } = useHistory();

  useEffect(() => {
    setShowModal(true);
    return () => {};
  }, []);

  const handleClose = () => {
    setShowModal(false);
    push(`/app/course/${id}`);
  };

  return (
    <CourseViewDetailStyle
      fullScreen
      open={showModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"Historia del Perú -_-"}
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentDetailStyle>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Growth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <References />
            </Grid>
            <Grid item xs={12} sm={6}>
              <VideoConference />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Jobs />
            </Grid>
          </Grid>
        </Container>
      </ContentDetailStyle>
    </CourseViewDetailStyle>
  );
};

export default CourseViewDetail;
