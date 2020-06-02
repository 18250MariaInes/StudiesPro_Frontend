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
import * as actions from '../../actions/teachers';
import * as selectedActions from '../../actions/selectedTeacher';
import LogoutButton from '../LogoutButton';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const TeacherUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldname,
  oldlastname,
  oldemail,
  
}) => {
  

  return (
    <div className="formTeacher" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformt">{'Actualizar profesor'}</h2>
      <p>
        <Field className="inputTeach"
          name="name"
          type="text"
          placeholder={oldname}
          component="input"
        />
      </p>
      <p>
        <Field className="inputTeach"
          name="lastname"
          type="text"
          placeholder={oldlastname}
          component="input"
        />
      </p>
      <p>
        <Field className="inputTeach"
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
            //<Link to='/Teachers'> 
              <button className="buttonTformt" type="submit" onClick={handleSubmit(onSubmit)}>
                {'Aceptar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </div>
  );
} 

export default reduxForm({form: 'teacherupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      
      id: selectedActions.selectedTeacher(state).payload.selectedTeacher.id,
      oldname: selectedActions.selectedTeacher(state).payload.selectedTeacher.name,
      oldlastname: selectedActions.selectedTeacher(state).payload.selectedTeacher.lastname,
      oldemail: selectedActions.selectedTeacher(state).payload.selectedTeacher.email,
      
      
    }),
    dispatch => ({
      onSubmit({name, lastname, email}, id, oldname, oldlastname, oldemail) {
        if (name==null){
          name=oldname;
        }
        if (lastname==null){
          lastname=oldlastname;
        }
        if (email==null){
          email=oldemail;
        }
        dispatch(
          actions.startUpdatingTeacher({
            id, name, lastname, email
           
          }),
          toast('¡Catedrático actualizado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
          dispatch(reset('teacherupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name, lastname, email}) {
        //console.log("Hola", stateProps.id); SI MANDA ID DEL BOOK
        dispatchProps.onSubmit({name, lastname, email}, stateProps.id, stateProps.oldname, stateProps.oldlastname, stateProps.oldemail);
      },
    })
  )(TeacherUpdateForm)
);
