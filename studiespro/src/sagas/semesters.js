import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';
  import { normalize } from 'normalizr';
  
  import * as selectors from '../reducers';
  import * as actions from '../actions/semesters';
  import * as types from '../types/semesters';
  import * as schemas from '../schemas/semesters';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchsemesters(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/semesters/`,
          {
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          const jsonResult = yield response.json();
          const {
            entities: { semesters },
            result,
          } = normalize(jsonResult, schemas.semesters);
  
          yield put(
            actions.completeFetchingSemesters(
              semesters,
              result,
            ),
          );
        } else {
          // const { non_field_errors } = yield response.json();
          // yield put(actions.failLogin(non_field_errors[0]));
        }
      }
    } catch (error) {
      // yield put(actions.failLogin('Falló horrible la conexión mano'));
      console.log("ERROR", error)
    }
  }
  
  export function* watchsemestersFetch() {
    yield takeEvery(
      types.SEMESTERS_FETCH_STARTED,
      fetchsemesters,
    );
  }
  
  function* addSemester(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/semester/`,
          {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          const jsonResult = yield response.json();
          yield put(
            actions.completeAddingSemester(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { semesters },
          //   result,
          // } = normalize(jsonResult, schemas.SEMESTERs);
  
          // yield put(
          //   actions.completeFetchingsemesters(
          //     semesters,
          //     result,
          //   ),
          // );
        } else {
          // const { non_field_errors } = yield response.json();
          // yield put(actions.failLogin(non_field_errors[0]));
        }
      }
    } catch (error) {
      // yield put(actions.failLogin('Falló horrible la conexión mano'));
      console.log("ERROR", error)
    }
  }
  
  export function* watchAddSemester() {
    yield takeEvery(
      types.SEMESTER_ADD_STARTED,
      addSemester,
    );
  }
  
  function* removeSemester(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/semester/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingSemester());
        } else {
          // const { non_field_errors } = yield response.json();
          // yield put(actions.failLogin(non_field_errors[0]));
        }
      }
    } catch (error) {
      // yield put(actions.failLogin('Falló horrible la conexión mano'));
      console.log("ERROR", error)
    }
  }
  
  export function* watchRemoveSemester() {
    yield takeEvery(
      types.SEMESTER_REMOVE_STARTED,
      removeSemester,
    );
  }