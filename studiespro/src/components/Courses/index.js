import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import * as actionsT from '../../actions/teachers';
import Course from '../Course';


const Courses = ({ course, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        course.length === 0 && !isLoading && (
          <p>{'No hay cursos registrados'}</p>
        )
      }
      {
        course.length > 0 && !isLoading && (
          <p className="tituloc">{'Cursos Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        course.length > 0 && !isLoading && (

          <div className="courses">
          
              {
                course.map(id => <Course key={id}
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
    teacher: selectors.getTeachers(state),
    course: selectors.getCourses(state),
    isLoading: selectors.isFetchingCourses(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actionsT.startFetchingTeachers());
      setTimeout(() => { dispatch(actions.startFetchingCourses()); }, 750);
      
      
    },
  }),
)(Courses);