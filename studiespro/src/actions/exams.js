import * as types from '../types/exams';


export const startFetchingExams = () => ({
  type: types.EXAMS_FETCH_STARTED,
});
export const completeFetchingExams = (entities, order) => ({
  type: types.EXAMS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingExams = error => ({
  type: types.EXAMS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingExam = exam => ({
  type: types.EXAM_ADD_STARTED,
  payload: exam,
});
export const completeAddingExam = (oldId, exam) => ({
  type: types.EXAM_ADD_COMPLETED,
  payload: {
    oldId,
    exam,
  },
});
export const failAddingExam = (oldId, error) => ({
  type: types.EXAM_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingExam = id => ({
  type: types.EXAM_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingExam = () => ({
  type: types.EXAM_REMOVE_COMPLETED,
});
export const failRemovingExam = (id, error) => ({
  type: types.EXAM_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
})