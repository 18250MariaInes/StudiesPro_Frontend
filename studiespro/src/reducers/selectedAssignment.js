import * as types from '../types/selectedAssignment';


const selectedAssignment = (state = [0,"No seleccionó un Assignment",3], action) => {
  switch (action.type) {
    case types.ASSIGNMENT_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedAssignment;


export const getSelectedAssignment = state => state;
