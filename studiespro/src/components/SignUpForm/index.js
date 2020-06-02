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
import {reset, Field, reduxForm} from 'redux-form';

const SignUpForm = ({
  onSubmit,
  isLoading = false,
  error = null,
  handleSubmit,
}) => {  
  
  return (
      <Fragment>
        <form className="signup-wrapper"  onSubmit={handleSubmit}>
        {
          error && (
            <p>
              <strong>{ error }</strong>
            </p>
          )
        }
        <h1>Cuenta Nueva</h1>
        <p>
          <Field className="FormField_InputSign"
            name="name"
            type="text"
            placeholder="Nombre"
            component="input"
            
          />
        </p>
        <p>
          <Field
            className="FormField_InputSign"
            name="lastname"
            type="text"
            placeholder="Apellido"
            component="input"
          />
        </p>
        <p>
          <Field className="FormField_InputSign"
            name="email"
            type="text"
            placeholder="Correo electrónico"
            component="input"
          />
        </p>
        <p>
          <Field className="FormField_InputSign"
            name="carne"
            type="text"
            placeholder="Carné"
            component="input"
          />
        </p>
        <p>
          <Field className="FormField_InputSign"
            name="sship"
            type="text"
            placeholder="Cantidad de horas beca"
            component="input"
          />
        </p>
        <p>
          <Field className="FormField_InputSign"
            name="password"
            type="Password"
            placeholder="Contraseña"
            component="input"
          />
        </p>
        <p>
          {
            isLoading ? (
              <strong>{'Cargando...'}</strong>
            ) : (
              
                <button className="SubmitButtonSign" type="submit" >
                      {'Crear'}
                </button>
              
            )
          }
        </p>
        </form>
      </Fragment>
  ); 
} 


export default connect(
  state => ({
    isLoading: selectors.getIsRegistrating(state),
    error: selectors.getRegistratingError(state),
  }),
)(
  reduxForm({
    form:'signupform',
    onSubmit({name, lastname, email, carne, sship, password},  dispatch){
      dispatch(actions.startRegistration(name, lastname, email, carne, sship, password),
      dispatch(reset('signupform')),);
    },
  })(SignUpForm)
);

