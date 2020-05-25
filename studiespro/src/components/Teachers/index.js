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
          <p>{'No hay catedráticos registrados'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <p className="titulo">{'Catedráticos Registrados'}</p>
        )
      }
      {
        isLoading && (
          <p>{'Cargando...'}</p>
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