import * as types from '../types/selectedSemester';


const selectedSemester = (state = [0,"No seleccionó un semester",3], action) => {
  switch (action.type) {
    case types.SEMESTER_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedSemester;


export const getSelectedSemester = state => state;
