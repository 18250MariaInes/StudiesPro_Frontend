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
import * as actions from '../../actions/providers';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedProvider';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const ProviderForm = ({
  onSubmit,
  isLoading,
  student,
  selectedP,
  handleSubmit,
}) => {
  return (
    <div className="formP" onSubmit={handleSubmit} >
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Crear un nuevo contacto'}</h2>
      <p>
        <Field className="inputProv"
          name="name"
          type="text"
          placeholder="Nombre"
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="address"
          type="text"
          placeholder="Direccion"
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="email"
          type="text"
          placeholder="Email"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
           // <Link to='/Providers'> 
              <button type="submit" className="buttonTformp" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'providerform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      selectedP: selectedActions.selectedProvider(state).payload.selectedProvider.id,
    }),
    dispatch => ({
      onSubmit({name,address,email}, student) {
        dispatch(
          actions.startAddingProvider({
            id: uuidv4(),
            name,
            address,
            email,
            student,
          }),
        toast('¡Proveedor agregado!', 
        {position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000}),
        dispatch(reset('providerform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name,address,email}) {
        console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name,address,email}, stateProps.student);
      },
    })
  )(ProviderForm)
);
