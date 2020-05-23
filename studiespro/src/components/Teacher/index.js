import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';
import * as selectedActions from '../../actions/selectedTeacher';

const Teacher = ({ 
  teacher,
  name, 
  /*onDelete,*/ 
  isConfirmed = false,
  isSelected = false,
  onClick,
}) => (
  /*<div
  className={
    `
      Teacher-wrapper
      ${isSelected ? 'Teacher--selected' : ''}
    `
  }
  onClick={onClick}
  >
  <tr className={!isConfirmed ? 'pet-owner-row--pending' : ''}>
    <td>{ name }</td>
  </tr>
  </div>*/
  <div
        className={
          `
            teacher-wrapper
            ${isSelected ? 'teacher--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="teacher">
            <div className="teacher_name">
                Nombre: {(Object.entries(Object.entries(teacher)[1])[1]).slice(1)}
                <br></br>
                Apellido: {(Object.entries(Object.entries(teacher)[2])[1]).slice(1)}
                <br></br>
                Correo: {(Object.entries(Object.entries(teacher)[3])[1]).slice(1)}
            </div>
        </div>
      </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getTeacher(state, id),
    teacher: id/*index*/,
    isSelected: selectors.getSelectedTeacher(state) === id/*index*/,
    /*isSelected: selectors.getSelectedTeacher(state) === index,*/
  }),
  (dispatch, { id , index}) => ({
    onClick() {
      dispatch(selectedActions.selectedTeacher(id/*index*/));
      console.log(selectedActions.selectedTeacher(id/*index*/));
    },
    /*
    onDelete() {
      dispatch(actions.startRemovingPetOwner(id));
    }*/
  }),
)(Teacher);