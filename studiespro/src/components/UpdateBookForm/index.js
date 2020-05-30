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
import * as selectedActions from '../../actions/selectedBook';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {Field, reduxForm} from 'redux-form';

const BookUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldtitle,
  olddescription,
  olddate,
  //props,
}) => {
  //const boundHandleSubmit = handleSubmit.bind(student)
  //const { description, date,title } = props

  return (
    
    <form className="formB" onSubmit={handleSubmit} >
      
      <h2 className="tituloformb">{'Update libro'}</h2>
      <p>
        <Field className="inputBook"
          name="title"
          type="text"
          placeholder={oldtitle}
          component="input"
          //defaultValue={oldtitle}//hola
          
          
        />
      </p>
      
      <p>
        <Field className="inputBook"
          name="description"
          type="text"
          placeholder={olddescription}
          component="input"
        />
      </p>
      <p>
        <Field className="inputBook"
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
            //<Link to='/Books'> {/*CAMBIAR RUTA*/}
              <button className="buttonBform" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'bookupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      
      id: selectedActions.selectedBook(state).payload.selectedBook.id,
      olddescription: selectedActions.selectedBook(state).payload.selectedBook.description,
      olddate: selectedActions.selectedBook(state).payload.selectedBook.date,
      oldtitle: selectedActions.selectedBook(state).payload.selectedBook.title,
      
      
    }),
    dispatch => ({
      onSubmit({title, description, date}, id, oldtitle, olddate, olddescription) {
        if (title==null){
          title=oldtitle;
        }
        if (description==null){
          description=olddescription;
        }
        if (date==null){
          date=olddate;
        }
        dispatch(
          actions.startUpdatingingBook({
            id, title, description, date
           
          }),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({title, description, date}) {
        //console.log("Hola", stateProps.id); SI MANDA ID DEL BOOK
        dispatchProps.onSubmit({title, description, date}, stateProps.id, stateProps.oldtitle, stateProps.olddescription, stateProps.olddate);
      },
    })
  )(BookUpdateForm)
);

/*export default connect(
  state => ({
    isLoading: false,
    student: selectors.getAuthUserID(state),
    initialValues: selectors.getAuthUserID(state),
  }),
)(
  reduxForm({
    form:'bookform',
    enableReinitialize: true,
    onSubmit({title, description, date, student},  dispatch){
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
);
//AQUI EMPIEZA LO QUE YA FUNCIONABA
/*import { v4 as uuidv4 } from 'uuid';
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
            <Link to='/Books'> 
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
)(BookForm);*/
