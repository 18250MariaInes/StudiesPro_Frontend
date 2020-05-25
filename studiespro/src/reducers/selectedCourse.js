import * as types from '../types/selectedCourse';


const selectedCourse = (state = [0,"No seleccionó un curso",3], action) => {
  switch (action.type) {
    case types.COURSE_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedCourse;


export const getSelectedCourse = state => state;