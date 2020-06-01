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
  import * as actions from '../actions/courses';
  import * as types from '../types/courses';
  import * as schemas from '../schemas/courses';
  
  
  const API_BASE_URL = 'http://localhost:8000/api/v1';
  
  
  function* fetchcourses(action) {
    //const { student } = action.payload
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const student = yield select(selectors.getAuthUserID)
        const response = yield call(
          fetch,
          `${API_BASE_URL}/students/${student}/courses/`,
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
            entities: { courses },
            result,
          } = normalize(jsonResult, schemas.courses);
  
          yield put(
            actions.completeFetchingCourses(
              courses,
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
  
  export function* watchcoursesFetch() {
    yield takeEvery(
      types.COURSES_FETCH_STARTED,
      fetchcourses,
    );
  }
  
  function* addCourse(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      console.log(isAuth);
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/course/`,
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
            actions.completeAddingCourse(
              action.payload.id,
              jsonResult,
            ),
          );
          // const {
          //   entities: { COURSEs },
          //   result,
          // } = normalize(jsonResult, schemas.COURSEs);
  
          // yield put(
          //   actions.completeFetchingCOURSEs(
          //     COURSEs,
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
  
  export function* watchAddCourse() {
    yield takeEvery(
      types.COURSE_ADD_STARTED,
      addCourse,
    );
  }
  
  function* removeCourse(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/course/${action.payload.id.id}/`,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 204) {
          yield put(actions.completeRemovingCourse());
          console.log("Entro 204");
          // const {
          //   entities: { COURSEs },
          //   result,
          // } = normalize(jsonResult, schemas.COURSEs);
  
          // yield put(
          //   actions.completeFetchingCOURSEs(
          //     COURSEs,
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
  
  export function* watchRemoveCourse() {
    yield takeEvery(
      types.COURSE_REMOVE_STARTED,
      removeCourse,
    );
  }

  function* updateCourse(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/course/${action.payload.id.id}/`,
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
            actions.completeUpdatingCourse(
              action.payload.course.id,
              jsonResult,
            ),
          );
        } else {
          console.log("ALGO SALIO MAL Y NO ENTRA COMO 200")
          /*const { non_field_errors } = yield response.json();
          yield put(actions.failUpdatingCourse(non_field_errors[0]));*/
        }
      }
    } catch (error) {
      console.log("algo salio mal", error)
    }
  }
  
  export function* watchUpdateCourse() {
    yield takeEvery(
      types.COURSE_UPDATE_STARTED,
      updateCourse,
    );
  }
  