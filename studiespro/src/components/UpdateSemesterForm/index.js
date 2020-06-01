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
import * as actions from '../../actions/semesters';
import * as selectedActions from '../../actions/selectedsSemester';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const SemesterUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldbeginning,
  oldend,
  //props,
}) => {
  //const boundHandleSubmit = handleSubmit.bind(student)
  //const { beginning, end,title } = props

  return (
    
    <form className="formS" onSubmit={handleSubmit} >
      
      <h2 className="tituloforms">{'Update semestre'}</h2>
      <p>
        <Field className="inputSemester"
          name="beginning"
          type="text"
          placeholder={oldbeginning}
          component="input"
          //defaultValue={oldtitle}//hola
          
          
        />
      </p>
      
      <p>
        <Field className="inputSemester"
          name="end"
          type="text"
          placeholder={oldend}
          component="input"
        />
      </p>
      
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/SemesterSemesters'> {/*CAMBIAR RUTA*/}
              <button className="buttonSform" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'semesterupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      
      id: selectedActions.selectedSemester(state).payload.selectedSemester.id,
      oldbeginning: selectedActions.selectedSemester(state).payload.selectedSemester.beginning,
      oldend: selectedActions.selectedSemester(state).payload.selectedSemester.end,
      
      
    }),
    dispatch => ({
      onSubmit({ beginning, end}, id,  oldbeginning, oldend) {
        if (beginning==null){
          beginning=oldbeginning;
        }
        if (end==null){
          end=oldend;
        }
        dispatch(
          actions.startUpdatingSemester({
            id, beginning, end
          }),
        toast('¡Libro agregado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
          dispatch(reset('semesterupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({beginning, end}) {
        //console.log("Hola", stateProps.id); SI MANDA ID DEL BOOK
        dispatchProps.onSubmit({beginning, end}, stateProps.id, stateProps.oldbeginning, stateProps.oldend);
      },
    })
  )(SemesterUpdateForm)
);
