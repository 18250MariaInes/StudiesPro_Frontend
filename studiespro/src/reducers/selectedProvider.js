import * as types from '../types/selectedProvider';


const selectedProvider = (state = [0,"No seleccionó un provider",3], action) => {
  switch (action.type) {
    case types.PROVIDER_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedProvider;


export const getSelectedProvider = state => state;
