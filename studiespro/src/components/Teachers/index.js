import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';
import Teacher from '../Teacher';


const Teachers = ({ teacher, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    /*<Fragment>
      {
        teacher.length === 0 && !isLoading && (
          <p>{'No hay catedráticos registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <div>
          <p>{'CATEDRATICOS REGISTRADOS:'}
          </p>
              {
                teacher.map(index => <Teacher key={index}
                index={index}/>)
              }
          </div>
        )
      }
    </Fragment>*/
  <div className="teachers">
    
      {
        teacher.length === 0 && !isLoading && (
          <p>{'No hay catedráticos registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <div>
          <p>{'CATEDRATICOS REGISTRADOS:'}
          </p>
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