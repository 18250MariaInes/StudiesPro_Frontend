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
import * as actions from '../../actions/books';
import LogoutButton from '../LogoutButton';
import './styles.css';
const BookForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [date, changeDate] = useState('');
  return (
    <div className="formT">
      {/*<LogoutButton/>*/}
      <h2 className="tituloform">{'Crear un nuevo Libro'}</h2>
      <p>
        <input className="inputBook"
          type="text"
          placeholder="Nombre del libro"
          value={title}
          onChange={e => changeTitle(e.target.value)}
        />
      </p>
      <p>
        <input className="inputBook"
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={e => changeDescription(e.target.value)}
        />
      </p>
      <p>
        <input className="inputBook"
          type="text"
          placeholder="Fecha de entrega"
          value={date}
          onChange={e => changeDate(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Books'> {/*CAMBIAR RUTA*/}
              <button className="buttonTform" type="submit" onClick={
                () => {
                  onSubmit(title, description, date,student);
                  console.log(student);
                  //changeName('');
                  //changeLastName('');
                  //changeEmail('');
                }
              }>
                {'Agregar'}
              </button>
            </Link>
          )
        }
      </p>
      
    </div>
  );
} 


export default connect(
  state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
  }),
  dispatch => ({
    onSubmit(title, description, date, student) {
      console.log(student);
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
)(BookForm);