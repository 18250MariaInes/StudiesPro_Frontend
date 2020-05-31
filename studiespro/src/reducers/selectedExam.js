import * as types from '../types/selectedExam';


const selectedExam = (state = [0,"No seleccionó un examen",3], action) => {
  switch (action.type) {
    case types.EXAM_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedExam;


export const getSelectedExam = state => state;