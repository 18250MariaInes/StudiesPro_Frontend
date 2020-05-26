import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import * as selectedActions from '../../actions/selectedCourse';

const Course = ({ 
  course,
  name, 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
}) => (
  <div
        className={
          `
            course-wrapper
            ${isSelected ? 'course--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="course">
          <button className="delete_course"
          onClick={onDelete}>
              &times;
          </button>
          <div className="course_name">
          <p className="subtituloc">Nombre:</p>
          <p className="contenidoc">
              {(Object.entries(Object.entries(course)[1])[1]).slice(1)}
              </p>
          <p className="subtituloc">Semestre:</p>
          <p className="contenidoc">
              {(Object.entries(Object.entries(course)[2])[1]).slice(1)}
              </p>
          <p className="subtituloc">Catedratico:</p>
          <p className="contenidoc">
            {(Object.entries(Object.entries(course)[5])[1]).slice(1)}
            </p>
          </div>
        </div>
      </div>
     
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getCourse(state, id),
    course: id,
    isSelected: selectors.getSelectedCourse(state) === id/*index*/,

  }),
  (dispatch, {id}) => ({
    onClick() {
      dispatch(selectedActions.selectedCourse(id));
      console.log(selectedActions.selectedCourse(id).payload.id);
    },
      
    onDelete() {
      dispatch(actions.startRemovingCourse(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Course);