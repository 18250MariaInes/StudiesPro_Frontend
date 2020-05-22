import * as types from '../types/selectedTeacher';


export const selectedTeacher = index => ({
  type: types.TEACHER_SELECTED,
  payload: index, 
});