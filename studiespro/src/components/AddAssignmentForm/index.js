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
import * as actions from '../../actions/assignments';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedCourse';
import './styles.css';
const AssignmentForm = ({
  onSubmit,
  isLoading,
  student,
  course,
}) => {
  const [title, changeTitle] = useState('');
  const [description, changeDesc] = useState('');
  const [deadline, changeDeadline] = useState('');
  return (
    <div className="formP">
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Crear una nueva tarea'}</h2>
      <p>
        <input className="inputProv"
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={e => changeTitle(e.target.value)}
        />
      </p>
      <p>
        <input className="inputProv"
          type="text"
          placeholder="Descripcion"
          value={description}
          onChange={e => changeDesc(e.target.value)}
        />
      </p>
      <p>
        <input className="inputProv"
          type="text"
          placeholder="Fecha limite"
          value={deadline}
          onChange={e => changeDeadline(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Assignments'> 
              <button type="submit" className="buttonTformp" onClick={
                () => {
                  onSubmit(title, description, deadline,student, course);
                  console.log(course);
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
    course: selectedActions.selectedCourse(state).payload.selectedCourse.id,
  }),
  dispatch => ({
    onSubmit(title, description, deadline,student, course) {
      //console.log(student);
      console.log(course);
      dispatch(
        actions.startAddingAssignment({
          id: uuidv4(),
          title, 
          description, 
          deadline,
          student, 
          course
        }),
      );
      //console.log(student);
    },
  }),
)(AssignmentForm);
