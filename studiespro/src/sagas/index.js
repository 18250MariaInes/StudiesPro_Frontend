import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted,
  watchSignupStarted,
  watchRefreshTokenStarted,
} from './auth';

import {
  watchAddTeacher,
  watchteachersFetch,
  watchRemoveTeacher
} from './teacher';

import {
  watchAddBook,
  watchbooksFetch,
  watchRemoveBook
} from './books';

import {
  watchAddDelva,
  watchdelvasFetch,
  watchRemoveDelva
} from './delvas';

import {
  watchAddProvider,
  watchprovidersFetch,
  watchRemoveProvider
} from './providers';

import {
  watchAddSshipevent,
  watchsshipeventsFetch,
  watchRemoveSshipevent
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
  watchRemoveCourse
} from './courses';

import {
  watchAddSemester,
  watchsemestersFetch,
  watchRemoveSemester
} from './semesters';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignupStarted),
    fork(watchRefreshTokenStarted),
    
    fork(watchAddTeacher),
    fork(watchteachersFetch),
    fork(watchRemoveTeacher),

    fork(watchAddBook),
    fork(watchbooksFetch),
    fork(watchRemoveBook),

    fork(watchAddDelva),
    fork(watchdelvasFetch),
    fork(watchRemoveDelva),

    fork(watchAddProvider),
    fork(watchprovidersFetch),
    fork(watchRemoveProvider),
    
    fork(watchAddSshipevent),
    fork(watchsshipeventsFetch),
    fork(watchRemoveSshipevent),

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

    fork(watchAddSemester),
    fork(watchsemestersFetch),
    fork(watchRemoveSemester),
  ]);
}


export default mainSaga;