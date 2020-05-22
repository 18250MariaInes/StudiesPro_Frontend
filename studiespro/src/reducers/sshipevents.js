import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/sshipevents';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.SSHIPEVENTS_FETCH_COMPLETED: {
      const { entities, order } = action.payload;
      const newState = { ...state };
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
          isConfirmed: true,
        };
      });

      return newState;
    }
    case types.SSHIPEVENT_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.SSHIPEVENT_ADD_COMPLETED: {
      const { oldId, sshipevent } = action.payload;
      const newState = omit(state, oldId);
      newState[sshipevent.id] = {
        ...sshipevent,
        isConfirmed: true,
      };
      return newState;
    }
    case types.SSHIPEVENT_REMOVE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.SSHIPEVENTS_FETCH_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.SSHIPEVENT_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.SSHIPEVENT_ADD_COMPLETED: {
      const { oldId, sshipevent } = action.payload;
      return state.map(id => id === oldId ? sshipevent.id : id);
    }
    case types.SSHIPEVENT_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.SSHIPEVENTS_FETCH_STARTED: {
      return true;
    }
    case types.SSHIPEVENTS_FETCH_COMPLETED: {
      return false;
    }
    case types.SSHIPEVENTS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.SSHIPEVENTS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.SSHIPEVENTS_FETCH_STARTED: {
      return null;
    }
    case types.SSHIPEVENTS_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};


export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getSshipevent = (state, id) => state.byId[id];
export const getSshipevents = state => state.order.map(id => getSshipevent(state, id));
export const isFetchingSshipevents = state => state.isFetching;
export const getFetchingSshipeventsError = state => state.error;