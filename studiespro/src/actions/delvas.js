import * as types from '../types/delvas';


export const startFetchingDelvas = () => ({
  type: types.DELVAS_FETCH_STARTED,
});
export const completeFetchingDelvas = (entities, order) => ({
  type: types.DELVAS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingDelvas = error => ({
  type: types.DELVAS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingDelva = delva => ({
  type: types.DELVA_ADD_STARTED,
  payload: delva,
});
export const completeAddingDelva = (oldId, delva) => ({
  type: types.DELVA_ADD_COMPLETED,
  payload: {
    oldId,
    delva,
  },
});
export const failAddingDelva = (oldId, error) => ({
  type: types.DELVA_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingDelva = id => ({
  type: types.DELVA_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingDelva = () => ({
  type: types.DELVA_REMOVE_COMPLETED,
});
export const failRemovingDelva = (id, error) => ({
  type: types.DELVA_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});