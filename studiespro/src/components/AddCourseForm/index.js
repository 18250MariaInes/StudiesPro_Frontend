import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedsSemester';
import * as selectedActionsT from '../../actions/selectedTeacher';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';

const AddCourseForm = ({
  onSubmit,
  isLoading,
  student,
  semester,
  teacher,
  handleSubmit,
}) => {
  return (
    <form className="formC" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformc">{'Crear un nuevo curso'}</h2>
      <p>
        <Field className="inputCour"
          name="name"
          type="text"
          placeholder="Nombre"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Courses'> 
              <button type="submit" className="buttonTformc" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'courseform'})(
  connect(
    state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
    semester: selectedActions.selectedSemester(state).payload.selectedSemester.id,
    teacher: selectedActionsT.selectedTeacher(state).payload.selectedTeacher.id,
    }),
    dispatch => ({
      onSubmit({name}, student, semester, teacher) {
        dispatch(
          actions.startAddingCourse({
            id: uuidv4(),
            name,
            student, 
            semester, 
            teacher,
          }),
        dispatch(reset('courseform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name}) {
        console.log("Hola", stateProps.student, stateProps.semester, stateProps.teacher);
        dispatchProps.onSubmit({name}, stateProps.student, stateProps.semester, stateProps.teacher);
      },
    })
  )(AddCourseForm)
);
