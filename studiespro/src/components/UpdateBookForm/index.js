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
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
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
      
      <h2 className="tituloformb">{'Actualizar libro'}</h2>
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
      onSubmit({title, description, date}, id, oldtitle,  olddescription, olddate,) {
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
        toast('¡Libro actualizado!', 
        {position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000}),
        dispatch(reset('bookupdateform')),
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

