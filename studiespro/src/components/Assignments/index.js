import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';
import Assignment from '../Assignment';
import * as actionsc from '../../actions/courses';


const Assignments = ({ assignment, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        assignment.length === 0 && !isLoading && (
          <p>{'No hay assignments registrados'}</p>
        )
      }
      {
        assignment.length > 0 && !isLoading && (
          <p className="titulo">{'Tareas Registradas'}</p>
        )
      }
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        assignment.length > 0 && !isLoading && (
          <div className="assignments">
              {
                assignment.map(id => <Assignment key={id}
                id={id}/>)
              }
          </div>
        )
      }
    </div>
  );
};

export default connect(
  state => ({
    course: selectors.getCourses(state),
    assignment: selectors.getAssignments(state),
    isLoading: selectors.isFetchingAssignments(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actionsc.startFetchingCourses());
      dispatch(actions.startFetchingAssignments());
    },
  }),
)(Assignments);