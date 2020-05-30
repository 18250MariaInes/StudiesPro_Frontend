import * as types from '../types/selectedDelva';


const selectedDelva = (state = [0,"No seleccionó una delva",3], action) => {
  switch (action.type) {
    case types.DELVA_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedDelva;


export const getSelectedDelva = state => state;