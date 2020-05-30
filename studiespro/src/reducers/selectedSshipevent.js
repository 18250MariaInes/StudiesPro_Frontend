import * as types from '../types/selectedSshipevent';


const selectedSshipevent = (state = [0,"No seleccionó un evento",3], action) => {
  switch (action.type) {
    case types.SSHIPEVENT_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedSshipevent;


export const getSelectedSshipevent = state => state;
