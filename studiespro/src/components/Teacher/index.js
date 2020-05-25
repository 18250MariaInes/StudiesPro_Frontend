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
  onDelete,
}) => (
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
          <button className="delete_teacher"
            onClick={onDelete}>
             &times;
          </button>

          <div className="teacher_name">
          <p className="subtitulot">Nombre:</p>
              <p className="contenidot">
              {(Object.entries(Object.entries(teacher)[1])[1]).slice(1)}
              </p>
              <p className="subtitulot">Apellido:</p>
              <p className="contenidot">
              {(Object.entries(Object.entries(teacher)[2])[1]).slice(1)}
              </p>
              <p className="subtitulot">Correo:</p>
              <p className="contenidot">
              {(Object.entries(Object.entries(teacher)[3])[1]).slice(1)}
              </p>
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
  (dispatch, {id}) => ({
    onClick() {
      dispatch(selectedActions.selectedTeacher(id));
      console.log(selectedActions.selectedTeacher(id));
    },
    
    onDelete() {
      dispatch(actions.startRemovingTeacher(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Teacher);