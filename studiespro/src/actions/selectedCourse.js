import * as types from '../types/selectedCourse';


export const selectedCourse = index => ({
  type: types.COURSE_SELECTED,
  payload: index, 
});