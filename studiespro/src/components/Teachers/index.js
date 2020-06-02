import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';
import Teacher from '../Teacher';


const Teachers = ({ teacher, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        teacher.length === 0 && !isLoading && (
          <p className="titulo">{'No hay profesores registrados'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <p className="titulo">{'Profesores Registrados'}</p>
        )
      }
      {
        isLoading && (
          <p className="titulo">{'Cargando...'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <div className="teachers">
          
         
              {
                teacher.map(id => <Teacher key={id}
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
    isLoading: selectors.isFetchingTeachers(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingTeachers());
    },
  }),
)(Teachers);