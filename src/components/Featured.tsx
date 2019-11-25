/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getFeaturedBooks } from '../store/actions';
import Book from '../models/book/book';
import BookCover from './BookCover';
import Copyright from './Copyright';

const useStyles = makeStyles((theme: Theme) => createStyles({
  banner: {
    backgroundColor: '#03a9f4',
    textAlign: 'center',
    padding: '1px',
    fontFamily: 'Pacifico',
    fontSize: '1.2em',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: 0,
  },
}));

type FeaturedProps = {
  getFeatured: any,
  featuredBooks: Book[],
}

const Featured: FunctionComponent<FeaturedProps> = ({ featuredBooks, getFeatured }) => {
  const classes = useStyles();

  if (!featuredBooks.length) {
    getFeatured();
  }

  return (
    <div>
      <div className={classes.banner}>
        <h1>
          Faybler
        </h1>
      </div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {
            featuredBooks.map((book: Book) => (
              <BookCover book={book} key={book.id} />
            ))
          }
        </Grid>
      </Container>
      <Copyright />
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  getFeatured: () => dispatch(getFeaturedBooks()),
});

const mapStateToProps = (state: any) => ({ featuredBooks: state.featuredBooks });

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
