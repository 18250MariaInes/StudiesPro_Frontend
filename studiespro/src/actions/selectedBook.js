import * as types from '../types/selectedBook';


export const selectedBook = index => ({
  type: types.BOOK_SELECTED,
  payload: index, 
});