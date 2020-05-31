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
import * as selectedActionsC from '../../actions/selectedAssignment';
import './styles.css';
import { reset, Field, reduxForm} from 'redux-form';

const AssignmentUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  course,
  handleSubmit,
  oldtitle,
  olddescription,
  olddeadline,
}) => {
  return (
    <form className="formP" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Crear una nueva tarea'}</h2>
      <p>
        <Field className="inputProv"
          name="title"
          type="text"
          placeholder={oldtitle}
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="description"
          type="text"
          placeholder={olddescription}
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="deadline"
          type="text"
          placeholder={olddeadline}
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
      
    </form>
  );
} 

export default reduxForm({form: 'assignmentupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      course: selectedActions.selectedCourse(state).payload.selectedCourse.id,
      id: selectedActionsC.selectedAssignment(state).payload.selectedAssignment.id,
      oldtitle: selectedActionsC.selectedAssignment(state).payload.selectedAssignment.title,
      olddescription: selectedActionsC.selectedAssignment(state).payload.selectedAssignment.description,
      olddeadline: selectedActionsC.selectedAssignment(state).payload.selectedAssignment.deadline,
      oldcourse: selectedActionsC.selectedAssignment(state).payload.selectedAssignment.course,
    }),
    dispatch => ({
      onSubmit({title, description, deadline}, course, id, oldtitle, olddescription, olddeadline, oldcourse,) {
        if (title==null){
          title=oldtitle;
        }
        if (description==null){
          description=olddescription;
        }
        if (deadline==null){
          deadline=olddeadline;
        }
        if (course==undefined){
          course=oldcourse;
        }
        
        dispatch(
          actions.startUpdatingAssignment({
            id, title, description, deadline, course
          }),
        dispatch(reset('assignmentupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({title, description, deadline}) {
        //console.log("Hola", stateProps.student, stateProps.course);
        dispatchProps.onSubmit({title, description, deadline}, stateProps.course, stateProps.id, stateProps.oldtitle, stateProps.olddescription,stateProps.olddeadline, stateProps.oldcourse);
      },
    })
  )(AssignmentUpdateForm)
);
