import * as types from '../types/selectedDelva';


export const selectedDelva = index => ({
  type: types.DELVA_SELECTED,
  payload: index, 
});