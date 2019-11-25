/* eslint-disable arrow-body-style */
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from './reducer';
import Book from '../models/book/book';

export const SET_FEATURED_BOOKS = 'SET_FEATURED_BOOKS';
export const SET_FILTERED_BOOKS = 'SET_FILTERED_BOOKS';

interface SetFeaturedAction {
  type: typeof SET_FEATURED_BOOKS,
  featuredBooks: Book[],
}
interface SetSearchResults {
  type: typeof SET_FILTERED_BOOKS,
  filteredBooks: Book[],
}

type Actions = SetFeaturedAction | SetSearchResults;

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export const getFeaturedBooks = (): ThunkResult<void> => {
  return (dispatch: Dispatch<SetFeaturedAction>): void => {
    fetch(`${process.env.HOST}/books?featured=true`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok.');
        }
        return resp.json();
      })
      .then((json) => dispatch({
        type: 'SET_FEATURED_BOOKS',
        featuredBooks: json,
      }))
      .catch(() => {
        // TODO Temporaraly show a banner at the top of the screen stating network error etc.
      });
  };
};

export const getBooksByAuthor = () => ({});
