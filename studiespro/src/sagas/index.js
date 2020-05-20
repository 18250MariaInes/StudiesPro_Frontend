import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted } from './auth';
import {
  watchAddTeacher,
} from './teacher';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchAddTeacher),
  ]);
}


export default mainSaga;