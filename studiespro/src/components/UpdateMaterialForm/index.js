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
import * as selectedActionsM from '../../actions/selectedMaterial';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const UpdateMaterialForm = ({
  onSubmit,
  isLoading,
  student,
  provider,
  handleSubmit,
  oldname,
  olddescription,
  oldprice,
}) => {
  return (
    <form className="formM" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformm">{'Crear un nuevo material'}</h2>
      <p>
        <Field className="inputMat"
          name="name"        
          type="text"
          placeholder={oldname}
          component="input"
        />
      </p>
      <p>
        <Field className="inputMat"
          name="description"        
          type="text"
          placeholder={olddescription}
          component="input"
        />
      </p>
      <p>
        <Field className="inputMat"
          name="price"
          type="text"
          placeholder={oldprice}
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
      
    </form>
  );
} 

export default reduxForm({form: 'materialupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      provider: selectedActions.selectedProvider(state).payload.selectedProvider.id,
      id: selectedActionsM.selectedMaterial(state).payload.selectedMaterial.id,
      oldname: selectedActionsM.selectedMaterial(state).payload.selectedMaterial.name,
      olddescription: selectedActionsM.selectedMaterial(state).payload.selectedMaterial.description,
      oldprice: selectedActionsM.selectedMaterial(state).payload.selectedMaterial.price,
      oldprovider: selectedActionsM.selectedMaterial(state).payload.selectedMaterial.provider,
    }),
    dispatch => ({
      onSubmit({name, description, price}, provider, id, oldname, olddescription, oldprice, oldprovider) {
        if (name==null){
          name=oldname;
        }
        if (description==null){
          description=olddescription;
        }
        if (price==null){
          price=oldprice;
        }
        if (provider==undefined){
          provider=oldprovider;
        }
        dispatch(
          actions.startUpdatingMaterial({
            id, name, description, price, provider
          }),
        toast('¡Material actualizado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
        dispatch(reset('materialupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, description, price}) {
        console.log("Hola", stateProps.student, stateProps.provider);
        dispatchProps.onSubmit({name, description, price}, stateProps.provider, stateProps.id, stateProps.oldname, stateProps.olddescription, stateProps.oldprice, stateProps.oldprovider);
      },
    })
  )(UpdateMaterialForm)
);
