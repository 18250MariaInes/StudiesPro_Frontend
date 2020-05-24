import * as types from '../types/selectedProvider';


export const selectedTeacher = index => ({
  type: types.Provider_SELECTED,
  payload: index, 
});