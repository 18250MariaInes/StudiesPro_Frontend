import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/assignments';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.ASSIGNMENTS_FETCH_COMPLETED: {
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
    case types.ASSIGNMENT_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.ASSIGNMENT_ADD_COMPLETED: {
      const { oldId, assignment } = action.payload;
      const newState = omit(state, oldId);
      newState[assignment.id] = {
        ...assignment,
        isConfirmed: true,
      };
      return newState;
    }
    case types.ASSIGNMENT_REMOVE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.ASSIGNMENTS_FETCH_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.ASSIGNMENT_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.ASSIGNMENT_ADD_COMPLETED: {
      const { oldId, assignment } = action.payload;
      return state.map(id => id === oldId ? assignment.id : id);
    }
    case types.ASSIGNMENT_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.ASSIGNMENTS_FETCH_STARTED: {
      return true;
    }
    case types.ASSIGNMENTS_FETCH_COMPLETED: {
      return false;
    }
    case types.ASSIGNMENTS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.ASSIGNMENTS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.ASSIGNMENTS_FETCH_STARTED: {
      return null;
    }
    case types.ASSIGNMENTS_FETCH_COMPLETED: {
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

export const getAssignment = (state, id) => state.byId[id];
export const getAssignments = state => state.order.map(id => getAssignment(state, id));
export const isFetchingAssignments = state => state.isFetching;
export const getFetchingAssignmentsError = state => state.error;