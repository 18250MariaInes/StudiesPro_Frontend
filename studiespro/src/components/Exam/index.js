import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/exams';

const exam = ({ 
  exam,
  name, 
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
      exam-wrapper
        ${isNear ? 'exam--selected' : ''}
      `
    }
  >
    <div className="exam">
        <button className="delete_exam"
        onClick={onDelete}>
            &times;
        </button>
        <div className="exam_name">
        <p className="subtituloe">Nombre:</p>
        <p className="contenidoe">
            {(Object.entries(Object.entries(exam)[1])[1]).slice(1)}
            </p>
        <p className="subtituloe">Temas:</p>
        <p className="contenidoe">
            {(Object.entries(Object.entries(exam)[2])[1]).slice(1)}
            </p>
        <p className="subtituloe">Fecha:</p>
        <p className="contenidoe">
           {(Object.entries(Object.entries(exam)[3])[1]).slice(1)}
        </p>
        <p className="subtituloe">Curso:</p>
        <p className="contenidoe">
        {course==null ? "No tiene curso": (Object.entries(Object.entries(course)[1])[1]).slice(1)}
        </p>
        </div>
    </div>
  </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getCourse(state, id.course),
    ...selectors.getExam(state, id),
    courses: selectors.getCourses(state)/*index*/,
    exam: id,
    course: selectors.getCourse(state, id.course),
    isNear: id.is_near,
  }),
  (dispatch, {id}) => ({
      
    onDelete() {
      dispatch(actions.startRemovingExam(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(exam);