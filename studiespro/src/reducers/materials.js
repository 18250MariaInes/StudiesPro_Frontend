import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/materials';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.MATERIALS_FETCH_COMPLETED: {
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
    case types.MATERIAL_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.MATERIAL_ADD_COMPLETED: {
      const { oldId, material } = action.payload;
      const newState = omit(state, oldId);
      newState[material.id] = {
        ...material,
        isConfirmed: true,
      };
      return newState;
    }
    case types.MATERIAL_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.MATERIALS_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.MATERIAL_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.MATERIAL_ADD_COMPLETED: {
      const { oldId, material } = action.payload;
      return state.map(id => id === oldId ? material.id : id);
    }
    case types.MATERIAL_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.MATERIALS_FETCH_STARTED: {
      return true;
    }
    case types.MATERIALS_FETCH_COMPLETED: {
      return false;
    }
    case types.MATERIALS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.MATERIALS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.MATERIALS_FETCH_STARTED: {
      return null;
    }
    case types.MATERIALS_FETCH_COMPLETED: {
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

export const getMaterial = (state, id) => state.byId[id];
export const getMaterials = state => state.order.map(id => getMaterial(state, id));
export const isFetchingMaterials = state => state.isFetching;
export const getFetchingMaterialsError = state => state.error;