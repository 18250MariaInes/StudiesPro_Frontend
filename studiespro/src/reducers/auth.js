import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';

import * as types from '../types/auth';


const token = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return action.payload.token;
    }
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
    case types.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      return action.payload.newToken;
    }
    default: {
        return state;
    }
  }

};

const decoded = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return jwtDecode(action.payload.token);
    }
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
    case types.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      console.log("SI LLEGA?", jwtDecode(action.payload.newToken))
      return jwtDecode(action.payload.newToken);
    }
    default: {
        return state;
    }
  }
  
};

const isAuthenticating = (state = false, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return true;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return false;
    }
    case types.AUTHENTICATION_FAILED: {
      return false;
    }
    default: {
        return state;
    }
  }

};

const error = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return action.payload.error;
    }
    default: {
        return state;
    }
  }

};

const isRegistrating = (state = false, action) => {
  switch(action.type) {
    case types.REGISTRATION_STARTED: {
      return true;
    }
    case types.REGISTRATION_COMPLETED: {
      return false;
    }
    case types.REGISTRATION_FAILED: {
      return false;
    }
  }

  return state;
};

const error_register = (state = null, action) => {
  switch(action.type) {
    case types.REGISTRATION_STARTED: {
      return null;
    }
    case types.REGISTRATION_COMPLETED: {
      return null;
    }
    case types.REGISTRATION_FAILED: {
      return action.payload.error;
    }
  }

  return state;
};

const isRefreshing = (state = false, action) => {
  switch(action.type) {
    case types.TOKEN_REFRESH_STARTED: {
      return true;
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      return false;
    }
    case types.TOKEN_REFRESH_FAILED: {
      return false;
    }
  }

  return state;
};

const refreshingError = (state = null, action) => {
  switch(action.type) {
    case types.TOKEN_REFRESH_STARTED: {
      return null;
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      return null;
    }
    case types.TOKEN_REFRESH_FAILED: {
      return action.payload.error;
    }
  }

  return state;
};

const auth = combineReducers({
  token,
  decoded,
  isAuthenticating,
  error,
  isRegistrating,
  error_register,
  isRefreshing,
  refreshingError
});


export default auth;


export const getAuthToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getAuthenticatingError = state => state.error;
export const getAuthUserID = state => state.decoded ? state.decoded.user_id : null;
export const getAuthExpiration = state => state.decoded ? state.decoded.exp : null;
export const getAuthName = state => state.decoded ? state.decoded.username : null;
export const getIsRegistrating = state => state.isRegistrating;
export const getRegistratingError = state => state.error_register;
export const getIsRefreshingToken = state => state.isRefreshing;
export const getRefreshingError = state => state.refreshingError;