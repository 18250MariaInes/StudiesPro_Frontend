import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/exams';
import Exam from '../Exam';


const Exams = ({ exam, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        exam.length === 0 && !isLoading && (
          <p>{'No hay cursos registrados'}</p>
        )
      }
      {
        exam.length > 0 && !isLoading && (
          <p className="titulo">{'Cursos Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
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
    exam: selectors.getExams(state),
    isLoading: selectors.isFetchingExams(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingExams());
    },
  }),
)(Exams);