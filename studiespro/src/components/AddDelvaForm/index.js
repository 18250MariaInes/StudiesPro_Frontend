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
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const DelvaForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
}) => {
  return (
    <form className="formD" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformD">{'Crear una nueva Delva:'}</h2>
      <p>
        <Field className="inputBookD"
          name="name"
          type="text"
          placeholder="Nombre" 
          component="input"
        />
      </p>
      <p>
        <Field className="inputBookD"
          name="date"
          type="text"
          placeholder="Fecha (YYYY-MM-DD)"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Delvas'> 
              <button className="buttonTformD" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'delvaform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
    }),
    dispatch => ({
      onSubmit({name, date}, student) {
        dispatch(
          actions.startAddingDelva({
            id: uuidv4(),
            name,
            date,
            student,
          }),
        toast('¡Delva agregada!', 
        {position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000}),
        dispatch(reset('delvaform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, date}) {
        console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name, date}, stateProps.student);
      },
    })
  )(DelvaForm)
);