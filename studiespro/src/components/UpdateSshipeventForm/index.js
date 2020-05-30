import { v4 as uuidv4 } from 'uuid';
import React, { Fragment } from 'react';
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
import * as selectedActions from '../../actions/selectedSshipevent';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';

const SshipeventUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldname,
  olddescription,
  oldhours,
  olddate,
  //props,
}) => {
  return (
    
    <form className="formT" onSubmit={handleSubmit} >
      
      <h2 className="tituloform">{'Update evento de hora beca'}</h2>
      <p>
        <Field className="inputSshipevent"
          name="name"
          type="text"
          placeholder={oldname}
          component="input"
          //defaultValue={oldname}//hola
          
          
        />
      </p>
      
      <p>
        <Field className="inputSshipevent"
          name="description"
          type="text"
          placeholder={olddescription}
          component="input"
        />
      </p>
      <p>
        <Field className="inputSshipevent"
          name="hours"
          type="text"
          placeholder={oldhours}
          component="input"
        />
      </p>
      <p>
        <Field className="inputSshipevent"
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
            //<Link to='/Sshipevents'> {/*CAMBIAR RUTA*/}
              <button className="buttonTform" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'sshipeventupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      
      id: selectedActions.selectedSshipevent(state).payload.selectedSshipevent.id,
      olddescription: selectedActions.selectedSshipevent(state).payload.selectedSshipevent.description,
      olddate: selectedActions.selectedSshipevent(state).payload.selectedSshipevent.date,
      oldname: selectedActions.selectedSshipevent(state).payload.selectedSshipevent.name,
      oldhours: selectedActions.selectedSshipevent(state).payload.selectedSshipevent.hours,
      
      
    }),
    dispatch => ({
      onSubmit({name, description, hours, date}, id, oldname, olddescription, oldhours, olddate,) {
        if (name==null){
          name=oldname;
        }
        if (description==null){
          description=olddescription;
        }
        if (hours==null){
          hours=oldhours;
        }
        if (date==null){
          date=olddate;
        }
        dispatch(
          actions.startUpdatingSshipevent({
            id, name, description, hours, date
          }),
          dispatch(reset('sshipeventupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, description, hours, date}) {
        //console.log("Hola", stateProps.id); SI MANDA ID DEL BOOK
        dispatchProps.onSubmit({name, description, hours, date}, stateProps.id, stateProps.oldname, stateProps.olddescription, stateProps.oldhours, stateProps.olddate);
      },
    })
  )(SshipeventUpdateForm)
);

