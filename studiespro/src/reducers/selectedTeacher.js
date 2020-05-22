import * as types from '../types/selectedTeacher';


const selectedTeacher = (state = [0,"No seleccionó un catedratico",3], action) => {
  switch (action.type) {
    case types.TEACHER_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedTeacher;


export const getSelectedTeacher = state => state;