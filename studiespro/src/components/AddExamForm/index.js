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
import * as actions from '../../actions/exams';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedCourse';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';

const AddExamForm = ({
  onSubmit,
  isLoading,
  student,
  course,
  handleSubmit,
}) => {
  return (
    <div className="formE" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloforme">{'Crear un nuevo examen'}</h2>
      <p>
        <Field className="inputExam"
          name="title"
          type="text"
          placeholder="Titulo"
          component="input"
        />
      </p>
      <p>
        <Field className="inputExam"
          name="topics"
          type="text"
          placeholder="Temas"
          component="input"
        />
      </p>
      <p>
        <Field className="inputExam"
          name="date"
          type="text"
          placeholder="Fecha"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Exams'> 
              <button type="submit" className="buttonTforme" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'examform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      course: selectedActions.selectedCourse(state).payload.selectedCourse.id,
    }),
    dispatch => ({
      onSubmit({title, topics, date}, student, course) {
        dispatch(
          actions.startAddingExam({
            id: uuidv4(),
            title, 
            topics, 
            date,
            student,
            course,
          }),
        dispatch(reset('examform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({title, topics, date}) {
        console.log("Hola", stateProps.student, stateProps.course);
        dispatchProps.onSubmit({title, topics, date}, stateProps.student, stateProps.course);
      },
    })
  )(AddExamForm)
);