import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted } from './auth';
import {
  watchAddTeacher,
  watchteachersFetch,
  watchRemoveTeacher
} from './teacher';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchAddTeacher),
    fork(watchteachersFetch),
    fork(watchRemoveTeacher),
  ]);
}


export default mainSaga;