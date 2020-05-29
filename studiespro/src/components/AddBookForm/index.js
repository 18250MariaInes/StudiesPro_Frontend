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
import * as actions from '../../actions/books';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {Field, reduxForm} from 'redux-form';

const BookForm = ({
  handleSubmit,
  onSubmit,
  isLoading,
  student,
  values=[student]
}) => {
  
  return (
    
    <form className="formT" onSubmit={handleSubmit}>
      
      <h2 className="tituloform">{'Crear un nuevo Libro'}</h2>
      <p>
        <Field className="inputBook"
          name="title"
          type="text"
          placeholder="Nombre del libro"
          component="input"
          
        />
      </p>
      <p>
        <Field className="inputBook"
          name="description"
          type="text"
          placeholder="Descripción"
          component="input"
        />
      </p>
      <p>
        <Field className="inputBook"
          name="date"
          type="text"
          placeholder="Fecha de entrega"
          component="input"
        />
      </p>
      
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Books'> {/*CAMBIAR RUTA*/}
              <button className="buttonTform" type="submit">
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 


export default connect(
  state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
  }),
)(
  reduxForm({
    form:'bookform',
    onSubmit({title, description, date, student=13},  dispatch){
      dispatch(
        actions.startAddingBook({
          id: uuidv4(),
          title,
          description,
          date,
          student,
        }),
        console.log("entra a submit")
      );
    },
  })(BookForm)
);
/*export default reduxForm({form: 'bookform'})(
   connect(
  state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
  }),
  dispatch => ({
    onSubmit({title, description, date, student}, dispatch) {
      dispatch(
        actions.startAddingBook({
          id: uuidv4(),
          title,
          description,
          date,
          student,
        }),
      );
      console.log(student);
    },
  }),
)(BookForm),
);*/