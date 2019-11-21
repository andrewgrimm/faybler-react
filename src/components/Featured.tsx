import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from './Copyright';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    minHeight: 320,
  },
  fixedHeight: {
    height: 320,
  },
}));

const Featured: React.FunctionComponent<{}> = () => {
  const classes = useStyles({});
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el: number) => (
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                  <h1>{el}</h1>
                </Paper>
              </Grid>
            ))
        }
        </Grid>
      </Container>
      <Copyright />
    </div>
  );
};

export default Featured;
