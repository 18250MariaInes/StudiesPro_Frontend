import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/semesters';
import Semester from '../Semester';


const Semesters = ({ semester, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        semester.length === 0 && !isLoading && (
          <p>{'No hay semesters registrados'}</p>
        )
      }
      {
        semester.length > 0 && !isLoading && (
          <p className="titulo">{'Semestres Registrados'}</p>
        )
      }
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        semester.length > 0 && !isLoading && (
          <div className="semesters">
              {
                semester.map(id => <Semester key={id}
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
    isLoading: selectors.isFetchingSemesters(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingSemesters());
    },
  }),
)(Semesters);