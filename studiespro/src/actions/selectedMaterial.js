import * as types from '../types/selectedMaterial';


export const selectedMaterial = index => ({
  type: types.MATERIAL_SELECTED,
  payload: index, 
});