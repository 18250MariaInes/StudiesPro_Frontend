import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted } from './auth';
import {
  watchAddTeacher,
  watchteachersFetch
} from './teacher';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchAddTeacher),
    fork(watchteachersFetch)
  ]);
}


export default mainSaga;