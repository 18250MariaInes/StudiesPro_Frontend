import { v4 as uuidv4 } from 'uuid';
import React, {Fragment, useState } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';
import './styles.css';
import LogoutButton from '../LogoutButton';

const LoginForm = ({
  onSubmit,
  isLoading = false,
  error = null,
  isAuthenticated= false,
  authName = '',
}) => {  
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  if (isAuthenticated) {
    return (
      <h1>{`Bienvenido ${authName}!`}</h1>
    );
  }

  
  return (
    <Fragment>
      
      {
        error && (
          <p>
            <strong>{ error }</strong>
          </p>
        )
      }
      <p>
        <input
          className="FormField_Input"
          type="text"
          placeholder="Email"
          value={username}
          onChange={e => changeUsername(e.target.value)}
        />
      </p>
      <p>
        <input
          className="FormField_Input"
          type="password"
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
            <button className="SubmitButton" type="submit" onClick={
              () => onSubmit(username, password)
            }>
              {'Enviar'}
            </button>
          )
        }
      </p>
      

      <h1>{`Bienvenido ${authName} nuevamente!`}</h1>
    </Fragment>
  ); 
} 


export default connect(
  state => ({
    isLoading: false/*selectors.getIsAuthenticating(state)*/,
    error: selectors.getAuthenticatingError(state),
    isAuthenticated: selectors.isAuthenticated(state),
    authName: selectors.getAuthName(state),
  }),
  dispatch => ({
    onSubmit(username, password) {
      dispatch(actions.startLogin(username, password));
    },
  }),
)(LoginForm);
