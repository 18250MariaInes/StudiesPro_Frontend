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
  import * as actions from '../actions/exams';
  import * as types from '../types/exams';
  import * as schemas from '../schemas/exams';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchexams(action) {
    //const { student } = action.payload
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/exams/`,
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
            entities: { exams },
            result,
          } = normalize(jsonResult, schemas.exams);
  
          yield put(
            actions.completeFetchingExams(
              exams,
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
  
  export function* watchexamsFetch() {
    yield takeEvery(
      types.EXAMS_FETCH_STARTED,
      fetchexams,
    );
  }
  
  function* addExam(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      console.log(isAuth);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/exam/`,
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
            actions.completeAddingExam(
              action.payload.id,
              jsonResult,
            ),
          );
          
        } else {
          
        }
      }
    } catch (error) {
      console.log("ERROR", error)
    }
  }
  
  export function* watchAddExam() {
    yield takeEvery(
      types.EXAM_ADD_STARTED,
      addExam,
    );
  }
  
  function* removeExam(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/exam/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingExam());
          console.log("Entro 204");
          // const {
          //   entities: { exams },
          //   result,
          // } = normalize(jsonResult, schemas.exams);
  
          // yield put(
          //   actions.completeFetchingexams(
          //     exams,
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
  
  export function* watchRemoveExam() {
    yield takeEvery(
      types.EXAM_REMOVE_STARTED,
      removeExam,
    );
  }

  function* updateExam(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/exam/${action.payload.id.id}/`,
          {
            method: 'PUT',
            body: JSON.stringify(action.payload.id),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const jsonResult = yield response.json();
          console.log("SÍ ENTRA COMO STATUS 200")
          yield put(
            actions.completeUpdatingExam(
              action.payload.exam.id,
              jsonResult,
            ),
          );
        } else {
          console.log("ALGO SALIO MAL Y NO ENTRA COMO 200")
          /*const { non_field_errors } = yield response.json();
          yield put(actions.failUpdatingBook(non_field_errors[0]));*/
        }
      }
    } catch (error) {
      console.log("algo salio mal", error)
    }
  }
  
  export function* watchUpdateExam() {
    yield takeEvery(
      types.EXAM_UPDATE_STARTED,
      updateExam,
    );
  }

  function* updateExam(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/exam/${action.payload.id.id}/`,
          {
            method: 'PUT',
            body: JSON.stringify(action.payload.id),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const jsonResult = yield response.json();
          console.log("SÍ ENTRA COMO STATUS 200")
          yield put(
            actions.completeUpdatingExam(
              action.payload.exam.id,
              jsonResult,
            ),
          );
        } else {
          console.log("ALGO SALIO MAL Y NO ENTRA COMO 200")
          /*const { non_field_errors } = yield response.json();
          yield put(actions.failUpdatingBook(non_field_errors[0]));*/
        }
      }
    } catch (error) {
      console.log("algo salio mal", error)
    }
  }
  
  export function* watchUpdateExam() {
    yield takeEvery(
      types.EXAM_UPDATE_STARTED,
      updateExam,
    );
  }