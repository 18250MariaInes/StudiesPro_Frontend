import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/books';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.BOOKS_FETCH_COMPLETED: {
      const { entities, order } = action.payload;
      const newState = { ...state };
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
          isConfirmed: true,
        };
      });

      return newState;
    }
    case types.BOOK_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.BOOK_ADD_COMPLETED: {
      const { oldId, book } = action.payload;
      const newState = omit(state, oldId);
      newState[book.id] = {
        ...book,
        isConfirmed: true,
      };
      return newState;
    }
    case types.BOOK_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    case types.BOOK_UPDATE_STARTED: {
      /*const { oldId, book } = action.payload;
      const newState= omit(state, oldId);
      newState[book.id] = {
        ...book,
      };
      return newState;*/
      return {
        ...state,
        [action.payload.id.id]: {
        ...state[action.payload.id.id],//hola
        ...action.payload.id,
        },
      };
    }
    
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.BOOKS_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.BOOK_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.BOOK_ADD_COMPLETED: {
      const { oldId, book } = action.payload;
      return state.map(id => id === oldId ? book.id : id);
    }
    case types.BOOK_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    case types.BOOK_UPDATE_COMPLETED: {
      /*const { oldId, book } = action.payload;
      return state.map(id => id === oldId ? book.id : id);*/
      const { id, book } = action.payload;
        const newState = omit(state, id);
        newState[book.id] = {
          ...book,
          //isConfirmed: true,
        };
        return newState;
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.BOOKS_FETCH_STARTED: {
      return true;
    }
    case types.BOOKS_FETCH_COMPLETED: {
      return false;
    }
    case types.BOOKS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.BOOKS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.BOOKS_FETCH_STARTED: {
      return null;
    }
    case types.BOOKS_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const updateBookError = (state=null, action) => {
  switch(action.type){
    case types.BOOK_UPDATE_FAILED: {
      return action.payload.error;
    }
    case types.BOOK_UPDATE_COMPLETED: {
      return null;
    }
    case types.BOOK_UPDATE_STARTED: {
      return null;
    }
    default: {
      return state;
    }
  }
};


export default combineReducers({
  byId,
  order,
  isFetching,
  error,
  updateBookError,
});

export const getBook = (state, id) => state.byId[id];
export const getBooks = state => state.order.map(id => getBook(state, id));
export const isFetchingBooks = state => state.isFetching;
export const getFetchingBooksError = state => state.error;
export const getUpdateBookError = state => state.updateBookError;