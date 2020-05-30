import * as types from '../types/sshipevents';


export const startFetchingSshipevents = () => ({
  type: types.SSHIPEVENTS_FETCH_STARTED,
});
export const completeFetchingSshipevents = (entities, order) => ({
  type: types.SSHIPEVENTS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingSshipevents = error => ({
  type: types.SSHIPEVENTS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingSshipevent = sshipevent => ({
  type: types.SSHIPEVENT_ADD_STARTED,
  payload: sshipevent,
});
export const completeAddingSshipevent = (oldId, sshipevent) => ({
  type: types.SSHIPEVENT_ADD_COMPLETED,
  payload: {
    oldId,
    sshipevent,
  },
});
export const failAddingSshipevent = (oldId, error) => ({
  type: types.SSHIPEVENT_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingSshipevent = id => ({
  type: types.SSHIPEVENT_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingSshipevent = () => ({
  type: types.SSHIPEVENT_REMOVE_COMPLETED,
});
export const failRemovingSshipevent = (id, error) => ({
  type: types.SSHIPEVENT_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});

export const startUpdatingSshipevent = (id, name, description, hours, date) => ({
  type: types.SSHIPEVENT_UPDATE_STARTED,
  payload: {
    id,
    name, 
    description, 
    hours, 
    date,
  },
});
export const completeUpdatingSshipevent = (id, sshipevent) => ({
  type: types.SSHIPEVENT_UPDATE_COMPLETED,
  payload: {
    id,
    sshipevent,
  },
});
export const failUpdatingSshipevent = (id, error) => ({
  type: types.SSHIPEVENT_UPDATE_FAILED,
  payload: {
    id,
    error,
  },
});