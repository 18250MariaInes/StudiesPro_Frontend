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
import * as actions from '../../actions/teachers';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const TeacherForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
}) => {
  return (
    <div className="formTeacher" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformt">{'Crear un nuevo profesor'}</h2>
      <p>
        <Field className="inputTeach"
          name="name"
          type="text"
          placeholder="Nombre"
          component="input"
        />
      </p>
      <p>
        <Field className="inputTeach"
          name="lastname"
          type="text"
          placeholder="Apellido"
          component="input"
        />
      </p>
      <p>
        <Field className="inputTeach"
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
            //<Link to='/Teachers'> 
              <button className="buttonTformt" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'teacherform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
    }),
    dispatch => ({
      onSubmit({name,lastname,email}, student) {
        dispatch(
          actions.startAddingTeacher({
            id: uuidv4(),
            name,
            lastname,
            email,
            student,
          }),
        toast('¡Catedrático agregado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
        dispatch(reset('teacherform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name,lastname,email}) {
        console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({name,lastname,email}, stateProps.student);
      },
    })
  )(TeacherForm)
);
