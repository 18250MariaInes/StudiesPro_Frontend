import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/delvas';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.DELVAS_FETCH_COMPLETED: {
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
    case types.DELVA_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.DELVA_ADD_COMPLETED: {
      const { oldId, delva } = action.payload;
      const newState = omit(state, oldId);
      newState[delva.id] = {
        ...delva,
        isConfirmed: true,
      };
      return newState;
    }
    case types.DELVA_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    case types.DELVA_UPDATE_STARTED: {
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
    case types.DELVAS_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.DELVA_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.DELVA_ADD_COMPLETED: {
      const { oldId, delva } = action.payload;
      return state.map(id => id === oldId ? delva.id : id);
    }
    case types.DELVA_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    case types.DELVA_UPDATE_COMPLETED: {
      const { id, delva } = action.payload;
        const newState = omit(state, id);
        newState[delva.id] = {
          ...delva,
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
    case types.DELVAS_FETCH_STARTED: {
      return true;
    }
    case types.DELVAS_FETCH_COMPLETED: {
      return false;
    }
    case types.DELVAS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.DELVAS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.DELVAS_FETCH_STARTED: {
      return null;
    }
    case types.DELVAS_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const updateDelvaError = (state=null, action) => {
  switch(action.type){
    case types.DELVA_UPDATE_FAILED: {
      return action.payload.error;
    }
    case types.DELVA_UPDATE_COMPLETED: {
      return null;
    }
    case types.DELVA_UPDATE_STARTED: {
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
  updateDelvaError,
});

export const getDelva = (state, id) => state.byId[id];
export const getDelvas = state => state.order.map(id => getDelva(state, id));
export const isFetchingDelvas = state => state.isFetching;
export const getFetchingDelvasError = state => state.error;
export const getUpdateDelvaError = state => state.updateDelvaError;