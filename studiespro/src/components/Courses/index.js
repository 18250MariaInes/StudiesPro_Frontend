import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import * as actionsT from '../../actions/teachers';
import * as actionsS from '../../actions/semesters';
import Course from '../Course';


const Courses = ({ course, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        course.length === 0 && !isLoading && (
          <p className="tituloc">{'No hay cursos registrados'}</p>
        )
      }
      {
        course.length > 0 && !isLoading && (
          <p className="tituloc">{'Cursos Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p className="tituloc">{'Cargando...'}</p>
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
    semester: selectors.getSemesters(state),
    teacher: selectors.getTeachers(state),
    course: selectors.getCourses(state),
    isLoading: selectors.isFetchingCourses(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actionsT.startFetchingTeachers());
      dispatch(actionsS.startFetchingSemesters());
      setTimeout(() => { dispatch(actions.startFetchingCourses()); }, 300);
      
      
    },
  }),
)(Courses);