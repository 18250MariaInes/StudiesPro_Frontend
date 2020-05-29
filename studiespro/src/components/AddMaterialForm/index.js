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
import * as actions from '../../actions/materials';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedProvider';
import './styles.css';
import {Field, reduxForm} from 'redux-form';

const AddMaterialForm = ({
  onSubmit,
  isLoading,
  student,
  provider,
  handleSubmit,
}) => {
  return (
    <div className="formM" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformm">{'Crear un nuevo material'}</h2>
      <p>
        <Field className="inputMat"
          name="name"        
          type="text"
          placeholder="Nombre"
          component="input"
        />
      </p>
      <p>
        <Field className="inputMat"
          name="description"        
          type="text"
          placeholder="Description"
          component="input"
        />
      </p>
      <p>
        <Field className="inputMat"
          name="price"
          type="text"
          placeholder="Price"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Materials'> 
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

export default reduxForm({form: 'materialform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      provider: selectedActions.selectedProvider(state).payload.selectedProvider.id,
    }),
    dispatch => ({
      onSubmit({name, description, price}, student, provider) {
        dispatch(
          actions.startAddingMaterial({
            id: uuidv4(),
            name, 
            description, 
            price,
            student,
            provider,
          }),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, description, price}) {
        console.log("Hola", stateProps.student, stateProps.provider);
        dispatchProps.onSubmit({name, description, price}, stateProps.student, stateProps.provider);
      },
    })
  )(AddMaterialForm)
);
