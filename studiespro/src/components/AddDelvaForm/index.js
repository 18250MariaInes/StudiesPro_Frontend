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
import * as actions from '../../actions/delvas';
import LogoutButton from '../LogoutButton';

const DelvaForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [name, changeName] = useState('');
  const [date, changeDate] = useState('');
  return (
    <div>
      <LogoutButton/>
      <h2>{'Crear un nuevo catedratico:'}</h2>
      <p>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Apellido"
          value={date}
          onChange={e => changeDate(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Delvas'> 
              <button type="submit" onClick={
                () => {
                  onSubmit(name, date,student);
                  console.log(student);
                  //changeName('');
                  //changeLastName('');
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
    onSubmit(name,date, student) {
      console.log(student);
      dispatch(
        actions.startAddingDelva({
          id: uuidv4(),
          name,
          date,
          student,
        }),
      );
      console.log(student);
    },
  }),
)(DelvaForm);