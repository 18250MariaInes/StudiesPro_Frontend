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
  import * as actions from '../actions/delvas';
  import * as types from '../types/delvas';
  import * as schemas from '../schemas/delvas';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchdelvas(action) {
    //const { student } = action.payload
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/delvas/`,
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
            entities: { delvas },
            result,
          } = normalize(jsonResult, schemas.delvas);
  
          yield put(
            actions.completeFetchingDelvas(
              delvas,
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
  
  export function* watchdelvasFetch() {
    yield takeEvery(
      types.DELVAS_FETCH_STARTED,
      fetchdelvas,
    );
  }
  
  function* addDelva(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      console.log(isAuth);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/delvas/`,
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
            actions.completeAddingDelva(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { delvas },
          //   result,
          // } = normalize(jsonResult, schemas.delvas);
  
          // yield put(
          //   actions.completeFetchingdelvas(
          //     delvas,
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
  
  export function* watchAddDelva() {
    yield takeEvery(
      types.DELVA_ADD_STARTED,
      addDelva,
    );
  }
  
  function* removeDelva(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/delvas/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingDelva());
          console.log("Entro 204");
          // const {
          //   entities: { delvas },
          //   result,
          // } = normalize(jsonResult, schemas.delvas);
  
          // yield put(
          //   actions.completeFetchingdelvas(
          //     delvas,
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
  
  export function* watchRemoveDelva() {
    yield takeEvery(
      types.DELVA_REMOVE_STARTED,
      removeDelva,
    );
  }

  function* updateDelva(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/delva/${action.payload.id.id}/`,
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
            actions.completeUpdatingDelva(
              action.payload.delva.id,
              jsonResult,
            ),
          );
        } else {
          console.log("ALGO SALIO MAL Y NO ENTRA COMO 200")
          
        }
      }
    } catch (error) {
      console.log("algo salio mal", error)
    }
  }
  
  export function* watchUpdateDelva() {
    yield takeEvery(
      types.DELVA_UPDATE_STARTED,
      updateDelva,
    );
  }