import * as types from '../types/selectedExam';


export const selectedExam = index => ({
  type: types.EXAM_SELECTED,
  payload: index, 
});