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
import {Field, reduxForm} from 'redux-form';

const LoginForm = ({
  onSubmit,
  isLoading = false,
  error = null,
  isAuthenticated= false,
  authName = '',
  handleSubmit,
}) => {  
  //const [username, changeUsername] = useState('');
  //const [password, changePassword] = useState('');
  if (isAuthenticated) {
    return (
      <Redirect to='/Home' />
    );
  }

  
  return (
      <Fragment>
        <form className="login-wrapper" onSubmit={handleSubmit}> 
          {
            error && (
              <p>
                <strong>{ error }</strong>
              </p>
            )
          }
          <h1>¡Bienvenido!</h1>
          <p>
            <Field className="FormField_Input"
              name="username"
              type="text"
              placeholder="Email"
              component="input"
            />
          </p>
          <p>
            <Field className="FormField_Input"
              name="password"
              type="password"
              placeholder="Password"
              component="input"
            />
          </p>
          <p>
            {
              isLoading ? (
                <strong>{'Cargando...'}</strong>
              ) : (
                <button className="SubmitButton" type="submit" >
                  {'Login'}
                </button>
              )
            }
          </p>
          <Link to='/Signup' className="signup-link" >¿Eres nuevo? Crea una cuenta</Link>

          {/*<h1>{`Bienvenido ${authName} nuevamente!`}</h1>*/}
          </form>
      </Fragment>
  ); 
} 


/*export default connect(
  state => ({
    isLoading: selectors.getIsAuthenticating(state),
    error: selectors.getAuthenticatingError(state),
    isAuthenticated: selectors.isAuthenticated(state),
    authName: selectors.getAuthName(state),
  }),
  dispatch => ({
    onSubmit(username, password) {
      dispatch(actions.startLogin(username, password));
    },
  }),
)(LoginForm);*/
export default connect(
  state => ({
    isLoading: selectors.getIsAuthenticating(state),
    error: selectors.getAuthenticatingError(state),
    isAuthenticated: selectors.isAuthenticated(state),
    authName: selectors.getAuthName(state),
  }),
)(
  reduxForm({
    form:'loginform',
    onSubmit({username, password},  dispatch){
      dispatch(actions.startLogin(username, password));
    },
  })(LoginForm)
);
