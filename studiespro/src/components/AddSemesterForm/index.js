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
import * as actions from '../../actions/semesters';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddSemesterForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
}) => {
  return (
    <div className="formS" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloforms">{'Crear un nuevo Semestre'}</h2>
      <p>
        <Field className="inputSem"
          name="beginning"
          type="text"
          placeholder="Fecha de inicio (YYYY-MM-DD)"
          component="input"
        />
      </p>
      <p>
        <Field className="inputSem"
          name="end"
          type="text"
          placeholder="Fecha de fin (YYYY-MM-DD)"
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Semesters'> 
              <button type="submit" className="buttonTforms" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            </Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'semesterform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
    }),
    dispatch => ({
      onSubmit({beginning, end}, student) {
        dispatch(
          actions.startAddingSemester({
            id: uuidv4(),
            beginning, 
            end,
            student,
          }),
        toast('¡Semestre agregado!', 
        {position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000}),
        dispatch(reset('semesterform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({beginning, end}) {
        console.log("Hola", stateProps.student);
        dispatchProps.onSubmit({beginning, end}, stateProps.student);
      },
    })
  )(AddSemesterForm)
);
