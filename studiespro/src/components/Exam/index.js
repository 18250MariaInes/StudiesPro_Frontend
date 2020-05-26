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
}) => (
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
           {(Object.entries(Object.entries(exam)[5])[1]).slice(1)}
        </p>
        </div>
    </div>
     
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getExam(state, id),
    exam: id
  }),
  (dispatch, {id}) => ({
      
    onDelete() {
      dispatch(actions.startRemovingExam(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(exam);