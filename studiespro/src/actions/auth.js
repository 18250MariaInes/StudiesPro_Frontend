import * as types from '../types/auth';


export const startLogin = (email, password) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { email, password },
});

export const completeLogin = token => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = error => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error },
});

export const logout = () => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startRegistration = (name, lastname, email, carne, sship, password) => ({
  type: types.REGISTRATION_STARTED,
  payload: { name, lastname, email, carne, sship, password },
});

export const completeRegistration = () => ({
  type: types.REGISTRATION_COMPLETED,
});

export const failRegistration = error => ({
  type: types.REGISTRATION_FAILED,
  payload: { error },
});
