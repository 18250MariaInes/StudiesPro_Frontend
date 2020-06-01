import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/courses';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.COURSES_FETCH_COMPLETED: {
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
    case types.COURSE_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.COURSE_ADD_COMPLETED: {
      const { oldId, course } = action.payload;
      const newState = omit(state, oldId);
      newState[course.id] = {
        ...course,
        isConfirmed: true,
      };
      return newState;
    }
    case types.COURSE_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    case types.COURSE_UPDATE_STARTED: {
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
    case types.COURSES_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.COURSE_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.COURSE_ADD_COMPLETED: {
      const { oldId, course } = action.payload;
      return state.map(id => id === oldId ? course.id : id);
    }
    case types.COURSE_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    case types.COURSE_UPDATE_COMPLETED: {
      
      const { id, course } = action.payload;
        const newState = omit(state, id);
        newState[course.id] = {
          ...course,
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
    case types.COURSES_FETCH_STARTED: {
      return true;
    }
    case types.COURSES_FETCH_COMPLETED: {
      return false;
    }
    case types.COURSES_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.COURSES_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.COURSES_FETCH_STARTED: {
      return null;
    }
    case types.COURSES_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const updateCourseError = (state=null, action) => {
  switch(action.type){
    case types.COURSE_UPDATE_FAILED: {
      return action.payload.error;
    }
    case types.COURSE_UPDATE_COMPLETED: {
      return null;
    }
    case types.COURSE_UPDATE_STARTED: {
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
  updateCourseError
});

export const getCourse = (state, id) => state.byId[id];
export const getCourses = state => state.order.map(id => getCourse(state, id));
export const isFetchingCourses = state => state.isFetching;
export const getFetchingCoursesError = state => state.error;
export const getUpdateCourseError = state => state.updateCourseError;