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
import * as selectedActionsC from '../../actions/selectedExam';
import './styles.css';
import { reset, Field, reduxForm} from 'redux-form';

const ExamUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  course,
  handleSubmit,
  oldtitle,
  oldtopics,
  olddate,
}) => {
  return (
    <form className="formE" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloforme">{'Update exam'}</h2>
      <p>
        <Field className="inputExam"
          name="title"
          type="text"
          placeholder={oldtitle}
          component="input"
        />
      </p>
      <p>
        <Field className="inputExam"
          name="topics"
          type="text"
          placeholder={oldtopics}
          component="input"
        />
      </p>
      <p>
        <Field className="inputExam"
          name="date"
          type="text"
          placeholder={olddate}
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
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'examupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      course: selectedActions.selectedCourse(state).payload.selectedCourse.id,
      id: selectedActionsC.selectedExam(state).payload.selectedExam.id,
      oldtitle: selectedActionsC.selectedExam(state).payload.selectedExam.title,
      oldtopics: selectedActionsC.selectedExam(state).payload.selectedExam.topics,
      olddate: selectedActionsC.selectedExam(state).payload.selectedExam.date,
      oldcourse: selectedActionsC.selectedExam(state).payload.selectedExam.course,
    }),
    dispatch => ({
      onSubmit({title, topics, date}, course, id, oldtitle, oldtopics, olddate, oldcourse,) {
        if (title==null){
          title=oldtitle;
        }
        if (topics==null){
          topics=oldtopics;
        }
        if (date==null){
          date=olddate;
        }
        if (course==undefined){
          course=oldcourse;
        }
        
        dispatch(
          actions.startUpdatingExam({
            id, title, topics, date, course
          }),
        dispatch(reset('examupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({title, topics, date}) {
        //console.log("Hola", stateProps.student, stateProps.course);
        dispatchProps.onSubmit({title, topics, date}, stateProps.course, stateProps.id, stateProps.oldtitle, stateProps.oldtopics,stateProps.olddate, stateProps.oldcourse);
      },
    })
  )(ExamUpdateForm)
);
