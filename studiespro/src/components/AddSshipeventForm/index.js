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
import * as actions from '../../actions/sshipevents';
import LogoutButton from '../LogoutButton';

const SshipeventForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [hours, changeHours] = useState('');
  const [date, changeDate] = useState('');
  return (
    <div>
      <LogoutButton/>
      <h2>{'Crear un nuevo evento de horas beca:'}</h2>
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
          placeholder="Descripcion"
          value={description}
          onChange={e => changeDescription(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Hours"
          value={hours}
          onChange={e => changeHours(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={e => changeDate(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Sshipevents'> 
              <button type="submit" onClick={
                () => {
                  onSubmit(name, description, hours, date, student);
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
    onSubmit(name, description, hours, date, student) {
      console.log(student);
      dispatch(
        actions.startAddingSshipevent({
          id: uuidv4(),
          name, 
          description, 
          hours, 
          date,
          student,
        }),
      );
      console.log(student);
    },
  }),
)(SshipeventForm);
