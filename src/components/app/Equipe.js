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
        Equipe do projeto
      </Typography>
      <br />

      <Grid container justify="center" spacing={8} className={classes.grid}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://avatars1.githubusercontent.com/u/3254614"
                title="Bruno Brandão Inácio"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Bruno Brandão Inácio
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  Número USP: 9838122
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://avatars3.githubusercontent.com/u/36277911"
                title="Pedro de Moraes Ligabue"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Pedro de Moraes Ligabue
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  Número USP: 9837434
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}
                image="https://avatars0.githubusercontent.com/u/13718516"
                title="Rodrigo Perrucci Macharelli"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Rodrigo Perrucci Macharelli
                </Typography>
                <Typography variant="overline" color="textSecondary" component="p">
                  Número USP: 9348877
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid> 

    </div>
  );
}
