import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted,
  watchSignupStarted
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


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignupStarted),
    
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
  ]);
}


export default mainSaga;