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
import * as actions from '../../actions/semesters';
import LogoutButton from '../LogoutButton';
import './styles.css';

const AddSemesterForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [beginning, changeInicio] = useState('');
  const [end, changeFin] = useState('');
  return (
    <div className="formS">
      {/*<LogoutButton/>*/}
      <h2 className="tituloforms">{'Crear un nuevo Semestre'}</h2>
      <p>
        <input className="inputSem"
          type="text"
          placeholder="Fecha de inicio"
          value={beginning}
          onChange={e => changeInicio(e.target.value)}
        />
      </p>
      <p>
        <input className="inputSem"
          type="text"
          placeholder="Fecha de fin"
          value={end}
          onChange={e => changeFin(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Semesters'> 
              <button type="submit" className="buttonTforms" onClick={
                () => {
                  onSubmit(beginning, end, student);
                  console.log(student);
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
  }),
  dispatch => ({
    onSubmit(beginning, end, student) {
      console.log(student);
      dispatch(
        actions.startAddingSemester({
          id: uuidv4(),
          beginning,
          end,
          student,
        }),
      );
      //console.log(student);
    },
  }),
)(AddSemesterForm);
