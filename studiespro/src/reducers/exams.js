import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/exams';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.EXAMS_FETCH_COMPLETED: {
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
    case types.EXAM_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.EXAM_ADD_COMPLETED: {
      const { oldId, exam } = action.payload;
      const newState = omit(state, oldId);
      newState[exam.id] = {
        ...exam,
        isConfirmed: true,
      };
      return newState;
    }
    case types.EXAM_REMOVE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.EXAMS_FETCH_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.EXAM_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.EXAM_ADD_COMPLETED: {
      const { oldId, exam } = action.payload;
      return state.map(id => id === oldId ? exam.id : id);
    }
    case types.EXAM_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.EXAMS_FETCH_STARTED: {
      return true;
    }
    case types.EXAMS_FETCH_COMPLETED: {
      return false;
    }
    case types.EXAMS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.EXAMS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.EXAMS_FETCH_STARTED: {
      return null;
    }
    case types.EXAMS_FETCH_COMPLETED: {
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

export const getExam = (state, id) => state.byId[id];
export const getExams = state => state.order.map(id => getExam(state, id));
export const isFetchingExams = state => state.isFetching;
export const getFetchingExamsError = state => state.error;