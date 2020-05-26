import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/semesters';
import * as selectedActions from '../../actions/selectedsSemester';

const Semester = ({ 
  semester,
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
            semester-wrapper
            ${isSelected ? 'semester--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="semester">
          <button className="delete_semester"
            onClick={onDelete}>
             &times;
          </button>
          <div className="semester_name">
          <p className="subtitulop">Fecha Inicio:</p>
          <p className="contenidop">
              {(Object.entries(Object.entries(semester)[1])[1]).slice(1)}
              </p>
          <p className="subtitulop">Fecha Fin:</p>
          <p className="contenidop">
             {(Object.entries(Object.entries(semester)[2])[1]).slice(1)}
             </p>
             
          </div>
        </div>
     </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getSemester(state, id),
    semester: id/*index*/,
    isSelected: selectors.getSelectedSemester(state) === id/*index*/,
    /*isSelected: selectors.getSelectedTeacher(state) === index,*/
  }),
  (dispatch, {id}) => ({
    onClick() {
      dispatch(selectedActions.selectedSemester(id));
      console.log(selectedActions.selectedSemester(id).payload.id);
    },
    
    onDelete() {
      dispatch(actions.startRemovingSemester(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Semester);