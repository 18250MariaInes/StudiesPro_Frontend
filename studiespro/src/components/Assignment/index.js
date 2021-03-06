import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';
import * as selectedActions from '../../actions/selectedAssignment';

const Assignment = ({ 
  assignment,
  name, 
  /*onDelete,*/ 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
  course,
  isNear = false
}) => (

  <div
      className={
        `
        assignment-wrapper
          ${isNear ? 'assignment--selected' : ''}
          ${isSelected ? 'assignment--clicked' : ''}
        `
      }
      onClick={onClick}
  >
  
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
            {course==null ? "no tiene curso": (Object.entries(Object.entries(course)[1])[1]).slice(1)}
            </p>
        </div>
      </div>
  </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getCourse(state, id.course),
    ...selectors.getAssignment(state, id),
    courses: selectors.getCourses(state)/*index*/,
    assignment: id/*index*/,
    course: selectors.getCourse(state, id.course),
    isNear: id.is_near,
    isSelected: selectors.getSelectedAssignment(state) === id,
    /*isSelected: selectors.getSelectedTeacher(state) === index,*/
  }),
  (dispatch, {id}) => ({
    onClick(teachers) {
      dispatch(selectedActions.selectedAssignment(id));
      console.log(selectedActions.selectedAssignment(id));
      //console.log(teachers)
    },
    
    onDelete() {
      dispatch(actions.startRemovingAssignment(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Assignment);