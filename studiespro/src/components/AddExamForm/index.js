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
import * as actions from '../../actions/exams';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedCourse';
import './styles.css';

const AddExamForm = ({
  onSubmit,
  isLoading,
  student,
  course,
}) => {
  const [title, changeTitle] = useState('');
  const [topics, changeTopics] = useState('');
  const [date, changeDate] = useState('');
  return (
    <div className="formE">
      {/*<LogoutButton/>*/}
      <h2 className="tituloforme">{'Crear un nuevo examen'}</h2>
      <p>
        <input className="inputExam"
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={e => changeTitle(e.target.value)}
        />
      </p>
      <p>
        <input className="inputExam"
          type="text"
          placeholder="Temas"
          value={topics}
          onChange={e => changeTopics(e.target.value)}
        />
      </p>
      <p>
        <input className="inputExam"
          type="text"
          placeholder="Fecha"
          value={date}
          onChange={e => changeDate(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Exams'> 
              <button type="submit" className="buttonTforme" onClick={
                () => {
                  onSubmit(title, topics, date, student, course);
                  console.log(student);
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
    onSubmit(title, topics, date, student, course) {
      console.log(student);
      dispatch(
        actions.startAddingExam({
          id: uuidv4(),
          title, 
          topics, 
          date, 
          student, 
          course
        }),
      );
      //console.log(student);
    },
  }),
)(AddExamForm);
