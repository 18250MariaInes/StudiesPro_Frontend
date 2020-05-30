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
  teacherName,
  teachers,
  teacher,
  semester,
}) => (
  /*if (teacher==undefined || teacher==null){
    teacher=
  };*/
  <div
        className={
          `
            course-wrapper
            ${isSelected ? 'course-d--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="course_d">
          <button className="delete_course"
          onClick={onDelete}>
              &times;
          </button>
          <div className="course_name">
          <p className="subtituloc">Nombre:</p>
          <p className="contenidoc">
              {(Object.entries(Object.entries(course)[1])[1]).slice(1)}
              </p>
          <p className="subtituloc">Inicio:</p>
          <p className="contenidoc">
            
            {semester==null ? "no especificado": (Object.entries(Object.entries(semester)[1])[1]).slice(1)}
            </p>
          <p className="subtituloc">Fin:</p>
          <p className="contenidoc">
            
            {semester==null ? "no especificado": (Object.entries(Object.entries(semester)[2])[1]).slice(1)}
            </p>

          <p className="subtituloc">Catedratico:</p>
          <p className="contenidoc">
            
            {teacher==null ? "no tiene catedrático": (Object.entries(Object.entries(teacher)[1])[1]).slice(1)}
            </p>
          </div>
        </div>
      </div>
     
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getTeacher(state, id.teacher),
    ...selectors.getCourse(state, id),
    ...selectors.getSemester(state, id.semester),
    //teacher: selectors.getTeachers(state),
    teachers: selectors.getTeachers(state)/*index*/,
    course: id,
    teacher: selectors.getTeacherName(state, id.teacher),
    semester: selectors.getSemester(state, id.semester),
    isSelected: selectors.getSelectedCourse(state) === id/*index*/,
    //thatT: (Object.entries(Object.entries(selectors.getTeacherName(state, id.teacher))[1])[1]).slice(1)
    //teacher: (Object.entries(Object.entries(id)[2])[1]).slice(1),
    //teacherName: selectors.getTeacher(state, Number(Object.entries(Object.entries(id)[2])[1]).slice(1)),
  }),
  (dispatch, {id, state, teachers}) => ({
    onClick(teachers) {
      dispatch(selectedActions.selectedCourse(id));
      console.log(selectedActions.selectedCourse(id));
      //console.log(teachers)
    },
      
    onDelete() {
      dispatch(actions.startRemovingCourse(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Course);