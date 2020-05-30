import * as types from '../types/semesters';


export const startFetchingSemesters = () => ({
  type: types.SEMESTERS_FETCH_STARTED,
});
export const completeFetchingSemesters = (entities, order) => ({
  type: types.SEMESTERS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingSemesters = error => ({
  type: types.SEMESTERS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingSemester = semester => ({
  type: types.SEMESTER_ADD_STARTED,
  payload: semester,
});
export const completeAddingSemester = (oldId, semester) => ({
  type: types.SEMESTER_ADD_COMPLETED,
  payload: {
    oldId,
    semester,
  },
});
export const failAddingSemester = (oldId, error) => ({
  type: types.SEMESTER_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingSemester = id => ({
  type: types.SEMESTER_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingSemester = () => ({
  type: types.SEMESTER_REMOVE_COMPLETED,
});
export const failRemovingSemester = (id, error) => ({
  type: types.SEMESTER_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});

export const startUpdatingSemester = (id, beginning, end) => ({
  type: types.SEMESTER_UPDATE_STARTED,
  payload: {
    id,
    beginning, 
    end,
  },
});
export const completeUpdatingSemester = (id, semester) => ({
  type: types.SEMESTER_UPDATE_COMPLETED,
  payload: {
    id,
    semester,
  },
});
export const failUpdatingSemester = (id, error) => ({
  type: types.SEMESTER_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});