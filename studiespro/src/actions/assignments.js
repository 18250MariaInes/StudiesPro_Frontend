import * as types from '../types/assignments';


export const startFetchingAssignments = () => ({
  type: types.ASSIGNMENTS_FETCH_STARTED,
});
export const completeFetchingAssignments = (entities, order) => ({
  type: types.ASSIGNMENTS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingAssignments = error => ({
  type: types.ASSIGNMENTS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingAssignment = assignment => ({
  type: types.ASSIGNMENT_ADD_STARTED,
  payload: assignment,
});
export const completeAddingAssignment = (oldId, assignment) => ({
  type: types.ASSIGNMENT_ADD_COMPLETED,
  payload: {
    oldId,
    assignment,
  },
});
export const failAddingAssignment = (oldId, error) => ({
  type: types.ASSIGNMENT_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingAssignment = id => ({
  type: types.ASSIGNMENT_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingAssignment = () => ({
  type: types.ASSIGNMENT_REMOVE_COMPLETED,
});
export const failRemovingAssignment = (id, error) => ({
  type: types.ASSIGNMENT_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});