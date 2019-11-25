/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Book from '../models/book/book';

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    height: 320,
    fontSize: '1.3em',
    textAlign: 'center',
  },
  titleText: {
    fontSize: '1.2em',
  },
  authorText: {
    color: '#757575',
    fontSize: '0.9em',
  },
}));

type BookCoverProps = {
  book: Book,
}

const BookCover: FunctionComponent<BookCoverProps> = ({ book }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Paper className={classes.paper}>
        <span className={classes.titleText}>{book.title}</span>
        <span className={classes.authorText}>{`by ${book.authorUsername}`}</span>
        <br />
        <span>{`${book.content[0]}`}</span>
      </Paper>
    </Grid>
  );
};

export default BookCover;
