import Book from '../models/book/book';

export interface State {
  featuredBooks: Book[],
  filteredBooks: Book[],
}

const defaultState: State = {
  featuredBooks: [],
  filteredBooks: [],
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case 'SET_FEATURED_BOOKS':
      return { ...state, featuredBooks: action.featuredBooks };

    case 'SET_FILTERED_BOOKS':
      return { ...state, filteredBooks: action.filteredBooks };

    default:
      return { ...state };
  }
};
