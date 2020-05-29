import * as types from '../types/selectedBook';


const selectedBook = (state = [0,"No seleccionó un book",3], action) => {
  switch (action.type) {
    case types.BOOK_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedBook;


export const getSelectedBook = state => state;
