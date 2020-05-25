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
import './styles.css';
const DelvaForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [name, changeName] = useState('');
  const [date, changeDate] = useState('');
  return (
    <div className="formD">
      <LogoutButton/>
      <h2 className="tituloformD">{'Crear una nueva Delva:'}</h2>
      <p>
        <input className="inputBookD"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <input className="inputBookD"
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
            <Link to='/Delvas'> 
              <button className="buttonTformD" type="submit" onClick={
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