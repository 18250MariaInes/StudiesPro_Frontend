import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';


const TeacherRow = ({ name, /*onDelete,*/ isConfirmed = false }) => (
  <tr className={!isConfirmed ? 'pet-owner-row--pending' : ''}>
    <td>{ name }</td>
  </tr>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getTeacher(state, id),
  }),
  (dispatch, { id }) => ({
    /*onDelete() {
      dispatch(actions.startRemovingPetOwner(id));
    }*/
  }),
)(TeacherRow);