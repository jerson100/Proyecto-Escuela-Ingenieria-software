import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Grid } from "@material-ui/core";
import { CourseDescription, CourseNumber } from "./course.style";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Course = ({
  coverImage,
  title,
  path,
  number,
  description,
  handleContainerClick,
}) => {
  const classes = useStyles();
  const handleClick = useCallback(() => {
    handleContainerClick(path);
  }, [path, handleContainerClick]);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.media} image={coverImage} title={title} />
        <CardContent>
          <Grid container alignItems="center">
            <Grid item sm={2}>
              <CourseNumber color="secondary">{number}</CourseNumber>
            </Grid>
            <Grid item sm={10}>
              <Typography variant={"body1"} color="textPrimary" gutterBottom>
                {title}
              </Typography>
              <CourseDescription
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </CourseDescription>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      {/* </Link> */}
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default Course;
