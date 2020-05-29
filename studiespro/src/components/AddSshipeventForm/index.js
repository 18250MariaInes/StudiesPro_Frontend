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
import './styles.css';
import {Field, reduxForm} from 'redux-form';

const SshipeventForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
}) => {
  return (
    <form className="formHB" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformHB">{'Crear evento de horas beca'}</h2>
      <p>
        <Field className="inputHB"
          name="name"
          type="text"
          placeholder="Nombre del evento"
          component="input"
        />
      </p>
      <p>
        <Field className="inputHB"
          name="description"
          type="text"
          placeholder="Descripcion"
          component="input"
        />
      </p>
      <p>
        <Field className="inputHB"
          name="hours"
          type="text"
          placeholder="Horas realizadas"
          component="input"
        />
      </p>
      <p>
        <Field className="inputHB"
          name="date"
          type="text"
          placeholder="Fecha"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Sshipevents'> 
              <button className="buttonHBform" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'sshipeventform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
    }),
    dispatch => ({
      onSubmit({name, description, hours, date,}, student) {
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
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, description, hours, date}) {
        console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name, description, hours, date}, stateProps.student);
      },
    })
  )(SshipeventForm)
);
