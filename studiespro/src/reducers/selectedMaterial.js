import * as types from '../types/selectedMaterial';


const selectedMaterial = (state = [0,"No seleccionó un Material",3], action) => {
  switch (action.type) {
    case types.MATERIAL_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedMaterial;


export const getSelectedMaterial = state => state;