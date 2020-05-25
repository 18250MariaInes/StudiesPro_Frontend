import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import teacher, * as teachersSelectors from './teachers';
import delvas, * as delvasSelectors from './delvas';
import books, * as bookssSelectors from './books';
import providers, * as providersSelectors from './providers';
import sshipevents, * as sshipeventsSelectors from './sshipevents';
import semesters, * as semestersSelectors from './semesters';
import exams, * as examsSelectors from './exams';
import assignments, * as assignmentsSelectors from './assignments';
import selectedTeacher, * as selectedTeacherSelectors from './selectedTeacher';
import selectedProvider, * as selectedProviderSelectors from './selectedProvider';
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
  auth,
  teacher,
  delvas,
  books,
  providers,
  sshipevents,
  semesters,
  selectedTeacher,
  selectedProvider,
  assignments,
  exams,
  
  form: formReducer,
});


export default reducer;


//student
export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthName = state => authSelectors.getAuthName(state.auth);
export const getIsRegistrating = state => authSelectors.getIsRegistrating(state.auth);
export const getRegistratingError = state => authSelectors.getRegistratingError(state.auth);
//teacher
//cambiar de teachers a teacher porque en el estado esta en singular
export const getTeacher = (state, id) => teachersSelectors.getTeacher(state.teacher, id);
export const getTeachers = state => teachersSelectors.getTeachers(state.teacher);
export const isFetchingTeachers = state => teachersSelectors.isFetchingTeachers(state.teacher);
export const getFetchingTeachersError = state => teachersSelectors.getFetchingTeachersError(state.teacher);
//delvas
export const getDelva = (state, id) => delvasSelectors.getDelva(state.delvas, id);
export const getDelvas = state => delvasSelectors.getDelvas(state.delvas);
export const isFetchingDelvas = state => delvasSelectors.isFetchingDelvas(state.delvas);
export const getFetchingDelvasError = state => delvasSelectors.getFetchingDelvasError(state.delvas);
//books
export const getBook = (state, id) => bookssSelectors.getBook(state.books, id);
export const getBooks = state => bookssSelectors.getBooks(state.books);
export const isFetchingBooks = state => bookssSelectors.isFetchingBooks(state.books);
export const getFetchingBooksError = state => bookssSelectors.getFetchingBooksError(state.books);
//providers
export const getProvider = (state, id) => providersSelectors.getProvider(state.providers, id);
export const getProviders = state => providersSelectors.getProviders(state.providers);
export const isFetchingProviders = state => providersSelectors.isFetchingProviders(state.providers);
export const getFetchingProvidersError = state => providersSelectors.getFetchingProvidersError(state.providers);
//sshipevents
export const getSshipevent = (state, id) => sshipeventsSelectors.getSshipevent(state.sshipevents, id);
export const getSshipevents = state => sshipeventsSelectors.getSshipevents(state.sshipevents);
export const isFetchingSshipevents = state => sshipeventsSelectors.isFetchingSshipevents(state.sshipevents);
export const getFetchingSshipeventsError = state => sshipeventsSelectors.getFetchingSshipeventsError(state.sshipevents);
//exam
export const getExam = (state, id) => examsSelectors.getExam(state.exams, id);
export const getExams = state => examsSelectors.getExams(state.exams);
export const isFetchingExams = state => examsSelectors.isFetchingExams(state.exams);
export const getFetchingExamsError = state => examsSelectors.getFetchingExamsError(state.exams);
//assignment
export const getAssignment = (state, id) => assignmentsSelectors.getAssignment(state.assignments, id);
export const getAssignments = state => assignmentsSelectors.getAssignments(state.assignments);
export const isFetchingAssignments = state => assignmentsSelectors.isFetchingAssignments(state.assignments);
export const getFetchingAssignmentsError = state => assignmentsSelectors.getFetchingAssignmentsError(state.assignments);
//semesters
export const getSemester = (state, id) => semestersSelectors.getSemester(state.semesters, id);
export const getSemesters = state => semestersSelectors.getSemesters(state.semesters);
export const isFetchingSemesters = state => semestersSelectors.isFetchingSemesters(state.semesters);
export const getFetchingSemestersError = state => semestersSelectors.getFetchingSemestersError(state.semesters);

export const getSelectedTeacher = (state) => selectedTeacherSelectors.getSelectedTeacher(state.selectedTeacher)

export const getSelectedProvider = (state) => selectedProviderSelectors.getSelectedProvider(state.selectedProvider)
