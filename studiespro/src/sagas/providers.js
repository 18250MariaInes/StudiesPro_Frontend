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
  import * as actions from '../actions/providers';
  import * as types from '../types/providers';
  import * as schemas from '../schemas/providers';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchproviders(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/providers/`,
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
            entities: { providers },
            result,
          } = normalize(jsonResult, schemas.providers);
  
          yield put(
            actions.completeFetchingProviders(
              providers,
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
  
  export function* watchprovidersFetch() {
    yield takeEvery(
      types.PROVIDERS_FETCH_STARTED,
      fetchproviders,
    );
  }
  
  function* addProvider(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/provider/`,
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
            actions.completeAddingProvider(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { providers },
          //   result,
          // } = normalize(jsonResult, schemas.providers);
  
          // yield put(
          //   actions.completeFetchingproviders(
          //     providers,
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
  
  export function* watchAddProvider() {
    yield takeEvery(
      types.PROVIDER_ADD_STARTED,
      addProvider,
    );
  }
  
  function* removeProvider(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/provider/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingProvider());
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
  
  export function* watchRemoveProvider() {
    yield takeEvery(
      types.PROVIDER_REMOVE_STARTED,
      removeProvider,
    );
  }
  