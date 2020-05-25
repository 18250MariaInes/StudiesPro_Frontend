import { v4 as uuidv4 } from 'uuid';
import React, {Fragment, useState } from 'react';
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
import * as actions from '../../actions/auth';
import './styles.css';
import LogoutButton from '../LogoutButton';

const SignUpForm = ({
  onSubmit,
  isLoading = false,
  error = null,
}) => {  
  //email, name, lastname, carne, sship
  const [email, changeEmail] = useState('');
  const [name, changeName] = useState('');
  const [lastname, changeLastname] = useState('');
  const [carne, changeCarne] = useState('');
  const [sship, changeSship] = useState('');
  const [password, changePassword] = useState('');

  
  return (
      <Fragment>
        <div className="signup-wrapper">
        {
          error && (
            <p>
              <strong>{ error }</strong>
            </p>
          )
        }
        <h1>Cuenta Nueva</h1>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={e => changeName(e.target.value)}
          />
        </p>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Apellido"
            value={lastname}
            onChange={e => changeLastname(e.target.value)}
          />
        </p>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => changeEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Carne"
            value={carne}
            onChange={e => changeCarne(e.target.value)}
          />
        </p>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Sship"
            value={sship}
            onChange={e => changeSship(e.target.value)}
          />
        </p>
        <p>
          <input
            className="FormField_Input"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => changePassword(e.target.value)}
          />
        </p>
        <p>
          {
            isLoading ? (
              <strong>{'Cargando...'}</strong>
            ) : (
              <Link to='/Sshipevents'> 
                <button className="SubmitButton" type="submit" onClick={
                      () => onSubmit(name, lastname, email, carne, sship, password)
                    }>
                      {'Crear'}
                </button>
              </Link>
            )
          }
        </p>
        </div>
      </Fragment>
  ); 
} 


export default connect(
  state => ({
    isLoading: selectors.getIsRegistrating(state),
    error: selectors.getRegistratingError(state),
  }),
  dispatch => ({
    onSubmit(name, lastname, email, carne, sship, password) {
      dispatch(actions.startRegistration(name, lastname, email, carne, sship, password));
    },
  }),
)(SignUpForm);
