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
import * as selectedActions from '../../actions/selectedDelva';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const UpdateDelvaForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldname,
  olddate
}) => {
  return (
    <form className="formD" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformD">{'Actualizar Delva'}</h2>
      <p>
        <Field className="inputBookD"
          name="name"
          type="text"
          placeholder={oldname}
          component="input"
        />
      </p>
      <p>
        <Field className="inputBookD"
          name="date"
          type="text"
          placeholder={olddate}
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
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'updatedelvaform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      id: selectedActions.selectedDelva(state).payload.selectedDelva.id,
      oldname: selectedActions.selectedDelva(state).payload.selectedDelva.name,
      olddate: selectedActions.selectedDelva(state).payload.selectedDelva.date,
    }),
    dispatch => ({
      onSubmit({name, date}, id, oldname, olddate) {
        if (name==null){
          name=oldname;
        }
        if (date==null){
          date=olddate;
        }
        dispatch(
          actions.startUpdatingDelva({
            id, name, date
          }),
        toast('¡Delva actualizada!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
        dispatch(reset('updatedelvaform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, date}) {
        //console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name, date}, stateProps.id, stateProps.oldname, stateProps.olddate);
      },
    })
  )(UpdateDelvaForm)
);