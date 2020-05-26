import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';
import * as selectedActions from '../../actions/selectedCourse';

const Assignment = ({ 
  assignment,
  name, 
  /*onDelete,*/ 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
}) => (
  
      <div className="assignment">
        <button className="delete_assignment"
          onClick={onDelete}>
            &times;
        </button>
        <div className="assignment_name">
        <p className="subtitulop">Titulo:</p>
        <p className="contenidop">
            {(Object.entries(Object.entries(assignment)[1])[1]).slice(1)}
            </p>
        <p className="subtitulop">Descripcion:</p>
        <p className="contenidop">
            {(Object.entries(Object.entries(assignment)[2])[1]).slice(1)}
            </p>
            <p className="subtitulop">DeadLine:</p>
            <p className="contenidop">
            {(Object.entries(Object.entries(assignment)[3])[1]).slice(1)}
            </p>
            <p className="subtitulop">Curso:</p>
            <p className="contenidop">
            {(Object.entries(Object.entries(assignment)[5])[1]).slice(1)}
            </p>
        </div>
      </div>
  
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getAssignment(state, id),
    assignment: id/*index*/,
    /*isSelected: selectors.getSelectedTeacher(state) === index,*/
  }),
  (dispatch, {id}) => ({
    
    onDelete() {
      dispatch(actions.startRemovingAssignment(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Assignment);