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
const UpdateProviderForm = ({
  onSubmit,
  isLoading,
  student,
  selectedP,
  handleSubmit,
  oldname,
  oldaddress,
  oldemail,
}) => {
  return (
    <div className="formP" onSubmit={handleSubmit} >
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Update provider'}</h2>
      <p>
        <Field className="inputProv"
          name="name"
          type="text"
          placeholder={oldname}
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="address"
          type="text"
          placeholder={oldaddress}
          component="input"
        />
      </p>
      <p>
        <Field className="inputProv"
          name="email"
          type="text"
          placeholder={oldemail}
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
           // <Link to='/Providers'> 
              <button type="submit" className="buttonPformp" onClick={handleSubmit(onSubmit)}>
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'updateproviderform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      selectedP: selectedActions.selectedProvider(state).payload.selectedProvider.id,
      id: selectedActions.selectedProvider(state).payload.selectedProvider.id,
      oldname: selectedActions.selectedProvider(state).payload.selectedProvider.name,
      oldaddress: selectedActions.selectedProvider(state).payload.selectedProvider.address,
      oldemail: selectedActions.selectedProvider(state).payload.selectedProvider.email,
    }),
    dispatch => ({
      onSubmit({name,address,email}, id, oldname, oldaddress, oldemail) {
        if (name==null){
          name=oldname;
        }
        if (address==null){
          address=oldaddress;
        }
        if (email==null){
          email=oldemail;
        }
        dispatch(
          actions.startUpdatingProvider({
            id,
            name,
            address,
            email
          }),
        toast('¡Provider actualizado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
        dispatch(reset('updateproviderform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name,address,email}) {
        //console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name,address,email}, stateProps.id, stateProps.oldname, stateProps.oldaddress, stateProps.oldemail);
      },
    })
  )(UpdateProviderForm)
);
