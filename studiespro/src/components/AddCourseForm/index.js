import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedsSemester';
import * as selectedActionsT from '../../actions/selectedTeacher';
import './styles.css';

const AddCourseForm = ({
  onSubmit,
  isLoading,
  student,
  semester,
  teacher
}) => {
  const [name, changeName] = useState('');
  return (
    <div className="formC">
      {/*<LogoutButton/>*/}
      <h2 className="tituloformc">{'Crear un nuevo curso'}</h2>
      <p>
        <input className="inputCour"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Courses'> 
              <button type="submit" className="buttonTformc" onClick={
                () => {
                  onSubmit(name,student, semester,teacher);
                  console.log(student);
                  console.log(semester);
                  console.log(teacher);
                  //changeName('');
                  //changeaddress('');
                  //changeEmail('');
                }
              }>
                {'Agregar'}
              </button>
            </Link>
          )
        }
      </p>
      
    </div>
  );
} 


export default connect(
  state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
    semester: selectedActions.selectedSemester(state).payload.selectedSemester.id,
    teacher: selectedActionsT.selectedTeacher(state).payload.selectedTeacher.id,
  }),
  dispatch => ({
    onSubmit(name, student, semester, teacher) {
      console.log(student);
      dispatch(
        actions.startAddingCourse({
          id: uuidv4(),
          name,
          student,
          semester, 
          teacher
        }),
      );
      //console.log(student);
    },
  }),
)(AddCourseForm);
