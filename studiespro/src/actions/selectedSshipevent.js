import * as types from '../types/selectedSshipevent';


export const selectedSshipevent = index => ({
  type: types.SSHIPEVENT_SELECTED,
  payload: index, 
});