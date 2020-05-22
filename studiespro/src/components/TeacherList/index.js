import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

// import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';
import TeacherRow from '../TeacherRow';


const TeacherList = ({ teacher, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    <Fragment>
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
          <table>
            <tbody>
              {
                teacher.map(({ id }) => <TeacherRow key={id} id={id} />)
              }
            </tbody>
          </table>
        )
      }
    </Fragment>
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
)(TeacherList);