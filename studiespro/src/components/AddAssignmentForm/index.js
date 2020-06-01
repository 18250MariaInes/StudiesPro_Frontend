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
import * as actions from '../../actions/assignments';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedCourse';
import './styles.css';
import { reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AssignmentForm = ({
  onSubmit,
  isLoading,
  student,
  course,
  handleSubmit,
}) => {
  return (
    <div className="formP" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Crear una nueva tarea'}</h2>
      <p>
        <Field className="inputProv"
          name="title"
          type="text"
          placeholder="Titulo"
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="description"
          type="text"
          placeholder="Descripcion"
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="deadline"
          type="text"
          placeholder="Fecha limite"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Assignments'> 
              <button type="submit" className="buttonTformp" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'assignmentform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      course: selectedActions.selectedCourse(state).payload.selectedCourse.id,
    }),
    dispatch => ({
      onSubmit({title, description, deadline}, student, course) {
        dispatch(
          actions.startAddingAssignment({
            id: uuidv4(),
            title, 
            description, 
            deadline,
            student,
            course,
          }),
        toast('¡Tarea agregada!', 
        {position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000}),
        dispatch(reset('assignmentform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({title, description, deadline}) {
        console.log("Hola", stateProps.student, stateProps.course);
        dispatchProps.onSubmit({title, description, deadline}, stateProps.student, stateProps.course);
      },
    })
  )(AssignmentForm)
);
