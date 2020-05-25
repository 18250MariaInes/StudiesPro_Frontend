import * as types from '../types/courses';


export const startFetchingCourses = () => ({
  type: types.COURSES_FETCH_STARTED,
});
export const completeFetchingCourses = (entities, order) => ({
  type: types.COURSES_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingCourses = error => ({
  type: types.COURSES_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingCourse = course => ({
  type: types.COURSE_ADD_STARTED,
  payload: course,
});

export const completeAddingCourse = (oldId, course) => ({
  type: types.COURSE_ADD_COMPLETED,
  payload: {
    oldId,
    course,
  },
});

export const failAddingCourse = (oldId, error) => ({
  type: types.COURSE_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingCourse = id => ({
  type: types.COURSE_REMOVE_STARTED,
  payload: {
    id,
  },
});

export const completeRemovingCourse = () => ({
  type: types.COURSE_REMOVE_COMPLETED,
});

export const failRemovingCourse = (id, error) => ({
  type: types.COURSE_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});