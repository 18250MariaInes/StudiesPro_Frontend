import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/teachers';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.TEACHER_FETCH_COMPLETED: {
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
    case types.TEACHER_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.TEACHER_ADD_COMPLETED: {
      const { oldId, teacher } = action.payload;
      const newState = omit(state, oldId);
      newState[teacher.id] = {
        ...teacher,
        isConfirmed: true,
      };
      return newState;
    }
    case types.TEACHER_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    case types.TEACHER_UPDATE_STARTED: {
      return {
        ...state,
        [action.payload.id.id]: {
        ...state[action.payload.id.id],
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
    case types.TEACHER_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.TEACHER_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.TEACHER_ADD_COMPLETED: {
      const { oldId, teacher } = action.payload;
      return state.map(id => id === oldId ? teacher.id : id);
    }
    case types.TEACHER_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    case types.TEACHER_UPDATE_COMPLETED: {
      
      const { id, teacher } = action.payload;
        const newState = omit(state, id);
        newState[teacher.id] = {
          ...teacher,
          
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
    case types.TEACHER_FETCH_STARTED: {
      return true;
    }
    case types.TEACHER_FETCH_COMPLETED: {
      return false;
    }
    case types.TEACHER_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.TEACHER_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.TEACHER_FETCH_STARTED: {
      return null;
    }
    case types.TEACHER_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const updateTeacherError = (state=null, action) => {
  switch(action.type){
    case types.TEACHER_UPDATE_FAILED: {
      return action.payload.error;
    }
    case types.TEACHER_UPDATE_COMPLETED: {
      return null;
    }
    case types.TEACHER_UPDATE_STARTED: {
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
  updateTeacherError
});

export const getTeacher = (state, id) => state.byId[id];
export const getTeachers = state => state.order.map(id => getTeacher(state, id));
export const isFetchingTeachers = state => state.isFetching;
export const getFetchingTeachersError = state => state.error;
export const getTeacherName = (state, id) => state.byId[id];
export const getUpdateTeacherError = state => state.updateTeacherError;