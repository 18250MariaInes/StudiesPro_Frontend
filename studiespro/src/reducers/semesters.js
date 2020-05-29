import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/semesters';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.SEMESTERS_FETCH_COMPLETED: {
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
    case types.SEMESTER_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.SEMESTER_ADD_COMPLETED: {
      const { oldId, semester } = action.payload;
      const newState = omit(state, oldId);
      newState[semester.id] = {
        ...semester,
        isConfirmed: true,
      };
      return newState;
    }
    case types.SEMESTER_REMOVE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.SEMESTERS_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.SEMESTER_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.SEMESTER_ADD_COMPLETED: {
      const { oldId, semester } = action.payload;
      return state.map(id => id === oldId ? semester.id : id);
    }
    case types.SEMESTER_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.SEMESTERS_FETCH_STARTED: {
      return true;
    }
    case types.SEMESTERS_FETCH_COMPLETED: {
      return false;
    }
    case types.SEMESTERS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.SEMESTERS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.SEMESTERS_FETCH_STARTED: {
      return null;
    }
    case types.SEMESTERS_FETCH_COMPLETED: {
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
});

export const getSemester = (state, id) => state.byId[id];
export const getSemesters = state => state.order.map(id => getSemester(state, id));
export const isFetchingSemesters = state => state.isFetching;
export const getFetchingSemestersError = state => state.error;