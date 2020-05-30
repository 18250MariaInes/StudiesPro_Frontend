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
  import * as actions from '../actions/books';
  import * as types from '../types/books';
  import * as schemas from '../schemas/books';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchbooks(action) {
    //const { student } = action.payload
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/books/`,
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
            entities: { books },
            result,
          } = normalize(jsonResult, schemas.books);
  
          yield put(
            actions.completeFetchingBooks(
              books,
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
  
  export function* watchbooksFetch() {
    yield takeEvery(
      types.BOOKS_FETCH_STARTED,
      fetchbooks,
    );
  }
  
  function* addBook(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      console.log(isAuth);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/book/`,
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
            actions.completeAddingBook(
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
  
  export function* watchAddBook() {
    yield takeEvery(
      types.BOOK_ADD_STARTED,
      addBook,
    );
  }
  
  function* removeBook(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/book/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          yield put(actions.completeRemovingBook());
          console.log("Entro 204");
          // const {
          //   entities: { books },
          //   result,
          // } = normalize(jsonResult, schemas.books);
  
          // yield put(
          //   actions.completeFetchingbooks(
          //     books,
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
  
  export function* watchRemoveBook() {
    yield takeEvery(
      types.BOOK_REMOVE_STARTED,
      removeBook,
    );
  }

  function* updateBook(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/book/${action.payload.id.id}/`,
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
            actions.completeUpdatingBook(
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
  
  export function* watchUpdateBook() {
    yield takeEvery(
      types.BOOK_UPDATE_STARTED,
      updateBook,
    );
  }