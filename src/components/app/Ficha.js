import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 4, 4, 4),
  },
  card: {
    width: 220,
  },
  grid: {
    margin: theme.spacing(1, 0, 0, 1),
  },
  media: {
    height: 220,
  },
}));

export default function Sobre() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography paragraph variant="h2">
        Custo-Eficiência Energética
      </Typography>
      <Typography paragraph variant="h3">
        Ficha Técnica
      </Typography>
      <br />

      <Grid container justify="center" spacing={8} className={classes.grid}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                title="React"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  React
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  <a style={{ color: "white", textDecoration: "none" }} href="https://reactjs.org/">https://reactjs.org/</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://material-ui.com/static/logo.png"
                title="Material-UI"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Material-UI
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  <a style={{ color: "white", textDecoration: "none" }} href="https://material-ui.com/">https://material-ui.com/</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                title="Express"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Express
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  <a style={{ color: "white", textDecoration: "none" }} href="https://expressjs.com/">https://expressjs.com/</a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid> 

    </div>
  );
}
