import * as types from '../types/selectedSemester';


export const selectedSemester = index => ({
  type: types.SEMESTER_SELECTED,
  payload: index, 
});