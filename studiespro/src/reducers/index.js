import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import teacher, * as teachersSelectors from './teachers';


const reducer = combineReducers({
  auth,
  teacher,
});


export default reducer;



export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthName = state => authSelectors.getAuthName(state.auth);

export const getTeacher = (state, id) => teachersSelectors.getTeacher(state.Teachers, id);
export const getTeachers = state => teachersSelectors.getTeachers(state.Teachers);
export const isFetchingTeachers = state => teachersSelectors.isFetchingTeachers(state.Teachers);
export const getFetchingTeachersError = state => teachersSelectors.getFetchingTeachersError(state.Teachers);
