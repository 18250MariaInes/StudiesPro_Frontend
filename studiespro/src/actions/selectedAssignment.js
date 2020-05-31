import * as types from '../types/selectedAssignment';


export const selectedAssignment = index => ({
  type: types.ASSIGNMENT_SELECTED,
  payload: index, 
});