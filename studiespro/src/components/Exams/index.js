import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/exams';
import * as actionsc from '../../actions/courses';
import Exam from '../Exam';


const Exams = ({ exam, isLoading, onLoad, isLoadingC}) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        exam.length === 0 && !isLoading && (
          <p className="titulo">{'No hay exámenes registrados'}</p>
        )
      }
      {
        exam.length > 0 && !isLoading && (
          <p className="titulo">{'Examenes Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p className="titulo">{'Cargando...'}</p>
        )
      }
      {
        exam.length > 0 && !isLoading && (

          <div className="exams">
          
              {
                exam.map(id => <Exam key={id}
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
    exam: selectors.getExams(state),
    isLoading: selectors.isFetchingExams(state),
    isLoadingC: selectors.isFetchingCourses(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actionsc.startFetchingCourses());
      setTimeout(() => { dispatch(actions.startFetchingExams()); }, 500);
      
    },
  }),
)(Exams);