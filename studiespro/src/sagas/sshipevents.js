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
  import * as actions from '../actions/sshipevents';
  import * as types from '../types/sshipevents';
  import * as schemas from '../schemas/sshipevents';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchsshipevents(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/sshipevents/`,
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
            entities: { sshipevents },
            result,
          } = normalize(jsonResult, schemas.sshipevents);
  
          yield put(
            actions.completeFetchingSshipevents(
              sshipevents,
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
  
  export function* watchsshipeventsFetch() {
    yield takeEvery(
      types.SSHIPEVENTS_FETCH_STARTED,
      fetchsshipevents,
    );
  }
  
  function* addSshipevent(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/sshipevent/`,
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
            actions.completeAddingSshipevent(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { sshipevents },
          //   result,
          // } = normalize(jsonResult, schemas.sshipevents);
  
          // yield put(
          //   actions.completeFetchingsshipevents(
          //     sshipevents,
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
  
  export function* watchAddSshipevent() {
    yield takeEvery(
      types.SSHIPEVENT_ADD_STARTED,
      addSshipevent,
    );
  }
  
  function* removeSshipevent(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/sshipevent/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 204) {
          yield put(actions.completeRemovingSshipevent());
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
  
  export function* watchRemoveSshipevent() {
    yield takeEvery(
      types.SSHIPEVENT_REMOVE_STARTED,
      removeSshipevent,
    );
  }
  
  function* updateSshipevent(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/sshipevent/${action.payload.id.id}/`,
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
            actions.completeUpdatingSshipevent(
              action.payload.book.id,
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
  
  export function* watchUpdateSshipevent() {
    yield takeEvery(
      types.SSHIPEVENT_UPDATE_STARTED,
      updateSshipevent,
    );
  }