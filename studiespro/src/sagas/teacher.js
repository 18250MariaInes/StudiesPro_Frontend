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
  import * as actions from '../actions/teachers';
  import * as types from '../types/teachers';
  import * as schemas from '../schemas/teachers';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchteachers(action) {
    //const { student } = action.payload
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/teachers/`,
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
            entities: { teachers },
            result,
          } = normalize(jsonResult, schemas.teachers);
  
          yield put(
            actions.completeFetchingTeachers(
              teachers,
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
  
  export function* watchteachersFetch() {
    yield takeEvery(
      types.TEACHER_FETCH_STARTED,
      fetchteachers,
    );
  }
  
  function* addTeacher(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      console.log(isAuth);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/teacher/`,
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
          console.log("Aqui estamos");
          const jsonResult = yield response.json();
          yield put(
            actions.completeAddingTeacher(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { teachers },
          //   result,
          // } = normalize(jsonResult, schemas.teachers);
  
          // yield put(
          //   actions.completeFetchingteachers(
          //     teachers,
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
  
  export function* watchAddTeacher() {
    yield takeEvery(
      types.TEACHER_ADD_STARTED,
      addTeacher,
    );
  }
  
  function* removeTeacher(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/teacher/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingTeacher());
          console.log("Entro 204");
          // const {
          //   entities: { teachers },
          //   result,
          // } = normalize(jsonResult, schemas.teachers);
  
          // yield put(
          //   actions.completeFetchingteachers(
          //     teachers,
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
  
  export function* watchRemoveTeacher() {
    yield takeEvery(
      types.TEACHER_REMOVE_STARTED,
      removeTeacher,
    );
  }
  