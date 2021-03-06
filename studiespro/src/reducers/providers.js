import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/providers';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.PROVIDERS_FETCH_COMPLETED: {
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
    case types.PROVIDER_ADD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.PROVIDER_ADD_COMPLETED: {
      const { oldId, provider } = action.payload;
      const newState = omit(state, oldId);
      newState[provider.id] = {
        ...provider,
        isConfirmed: true,
      };
      return newState;
    }
    case types.PROVIDER_REMOVE_STARTED: {
      return omit(state, action.payload.id.id);
    }
    case types.PROVIDER_UPDATE_STARTED: {
      return {
        ...state,
        [action.payload.id.id]: {
        ...state[action.payload.id.id],//hola
        ...action.payload.id,
        },
      };
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.PROVIDERS_FETCH_COMPLETED: {
      return [...action.payload.order];
    }
    case types.PROVIDER_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.PROVIDER_ADD_COMPLETED: {
      const { oldId, provider } = action.payload;
      return state.map(id => id === oldId ? provider.id : id);
    }
    case types.PROVIDER_REMOVE_STARTED: {
      return state.filter(id => id !== action.payload.id.id);
    }
    case types.PROVIDER_UPDATE_COMPLETED: {
      /*const { oldId, PROVIDER } = action.payload;
      return state.map(id => id === oldId ? PROVIDER.id : id);*/
      const { id, provider } = action.payload;
        const newState = omit(state, id);
        newState[provider.id] = {
          ...provider,
          //isConfirmed: true,
        };
        return newState;
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.PROVIDERS_FETCH_STARTED: {
      return true;
    }
    case types.PROVIDERS_FETCH_COMPLETED: {
      return false;
    }
    case types.PROVIDERS_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.PROVIDERS_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.PROVIDERS_FETCH_STARTED: {
      return null;
    }
    case types.PROVIDERS_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const updateProviderError = (state=null, action) => {
  switch(action.type){
    case types.PROVIDER_UPDATE_FAILED: {
      return action.payload.error;
    }
    case types.PROVIDER_UPDATE_COMPLETED: {
      return null;
    }
    case types.PROVIDER_UPDATE_STARTED: {
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
  updateProviderError,
});

export const getProvider = (state, id) => state.byId[id];
export const getProviders = state => state.order.map(id => getProvider(state, id));
export const isFetchingProviders = state => state.isFetching;
export const getFetchingProvidersError = state => state.error;
export const getUpdateProviderError = state => state.updateProviderError;