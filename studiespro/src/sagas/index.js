import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted,
  watchSignupStarted,
  watchRefreshTokenStarted,
} from './auth';

import {
  watchAddTeacher,
  watchteachersFetch,
  watchRemoveTeacher,
  watchUpdateTeacher
} from './teacher';

import {
  watchAddBook,
  watchbooksFetch,
  watchRemoveBook,
  watchUpdateBook
} from './books';

import {
  watchAddDelva,
  watchdelvasFetch,
  watchRemoveDelva,
  watchUpdateDelva
} from './delvas';

import {
  watchAddProvider,
  watchprovidersFetch,
  watchRemoveProvider,
  watchUpdateProvider
} from './providers';

import {
  watchAddSshipevent,
  watchsshipeventsFetch,
  watchRemoveSshipevent,
  watchUpdateSshipevent,
} from './sshipevents';

import {
  watchAddExam,
  watchexamsFetch,
  watchRemoveExam
} from './exams';

import {
  watchAddAssignment,
  watchassignmentsFetch,
  watchRemoveAssignment
} from './assignments';

import {
  watchAddMaterial,
  watchmaterialsFetch,
  watchRemoveMaterial
} from './materials';

import {
  watchAddCourse,
  watchcoursesFetch,
  watchRemoveCourse,
  watchUpdateCourse,
} from './courses';

import {
  watchAddSemester,
  watchsemestersFetch,
  watchRemoveSemester,
  watchUpdateSemester
} from './semesters';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignupStarted),
    fork(watchRefreshTokenStarted),
    
    fork(watchAddTeacher),
    fork(watchteachersFetch),
    fork(watchRemoveTeacher),
    fork(watchUpdateTeacher),

    fork(watchAddBook),
    fork(watchbooksFetch),
    fork(watchRemoveBook),
    fork(watchUpdateBook),

    fork(watchAddDelva),
    fork(watchdelvasFetch),
    fork(watchRemoveDelva),
    fork(watchUpdateDelva),

    fork(watchAddProvider),
    fork(watchprovidersFetch),
    fork(watchRemoveProvider),
    fork(watchUpdateProvider),
    
    fork(watchAddSshipevent),
    fork(watchsshipeventsFetch),
    fork(watchRemoveSshipevent),
    fork(watchUpdateSshipevent),

    fork(watchAddExam),
    fork(watchexamsFetch),
    fork(watchRemoveExam),

    fork(watchAddAssignment),
    fork(watchassignmentsFetch),
    fork(watchRemoveAssignment),

    fork(watchAddMaterial),
    fork(watchmaterialsFetch),
    fork(watchRemoveMaterial),

    fork(watchAddCourse),
    fork(watchcoursesFetch),
    fork(watchRemoveCourse),
    fork(watchUpdateCourse),

    fork(watchAddSemester),
    fork(watchsemestersFetch),
    fork(watchRemoveSemester),
    fork(watchUpdateSemester),
  ]);
}


export default mainSaga;