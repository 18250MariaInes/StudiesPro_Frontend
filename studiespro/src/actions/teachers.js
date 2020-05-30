import * as types from '../types/teachers';


export const startFetchingTeachers = () => ({
  type: types.TEACHER_FETCH_STARTED,
});
export const completeFetchingTeachers = (entities, order) => ({
  type: types.TEACHER_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingTeachers = error => ({
  type: types.TEACHER_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingTeacher = teacher => ({
  type: types.TEACHER_ADD_STARTED,
  payload: teacher,
});
export const completeAddingTeacher = (oldId, teacher) => ({
  type: types.TEACHER_ADD_COMPLETED,
  payload: {
    oldId,
    teacher,
  },
});
export const failAddingTeacher = (oldId, error) => ({
  type: types.TEACHER_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingTeacher = id => ({
  type: types.TEACHER_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingTeacher = () => ({
  type: types.TEACHER_REMOVE_COMPLETED,
});
export const failRemovingTeacher = (id, error) => ({
  type: types.TEACHER_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});

export const startUpdatingTeacher = (id, name, lastname, email) => ({
  type: types.TEACHER_UPDATE_STARTED,
  payload: {
    id,
    name, 
    lastname, 
    email
  },
});
export const completeUpdatingTeacher = (id, teacher) => ({
  type: types.TEACHER_UPDATE_COMPLETED,
  payload: {
    id,
    teacher,
  },
});
export const failUpdatingTeacher = (id, error) => ({
  type: types.TEACHER_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});