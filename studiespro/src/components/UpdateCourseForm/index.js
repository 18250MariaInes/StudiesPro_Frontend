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
import * as actions from '../../actions/courses';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedsSemester';
import * as selectedActionsT from '../../actions/selectedTeacher';
import * as selectedActionsC from '../../actions/selectedCourse';
import './styles.css';
import {reset, Field, reduxForm} from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const CourseUpdateForm = ({
  onSubmit,
  isLoading,
  student,
  handleSubmit,
  oldname,
}) => {
  return (
    
    <form className="formC" onSubmit={handleSubmit}>
      {/*<LogoutButton/>*/}
      <h2 className="tituloformc">{'Actualizar Course'}</h2>
      <p>
        <Field className="inputCour"
          name="name"
          type="text"
          placeholder={oldname}
          component="input"
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            //<Link to='/Courses'> 
              <button type="submit" className="buttonTformc" onClick={handleSubmit(onSubmit)}>
                {'Agregar'}
              </button>
            //</Link>
          )
        }
      </p>
      
    </form>
  );
} 

export default reduxForm({form: 'courseupdateform'})(
  connect(
    state => ({
      isLoading: false,
      student: selectors.getAuthUserID(state),
      semester: selectedActions.selectedSemester(state).payload.selectedSemester.id,
      teacher: selectedActionsT.selectedTeacher(state).payload.selectedTeacher.id,
      id: selectedActionsC.selectedCourse(state).payload.selectedCourse.id,
      oldname: selectedActionsC.selectedCourse(state).payload.selectedCourse.name,
      oldsemester: selectedActionsC.selectedCourse(state).payload.selectedCourse.semester,
      oldteacher: selectedActionsC.selectedCourse(state).payload.selectedCourse.teacher,
    }),
    dispatch => ({
      onSubmit({name}, teacher, semester, id, oldname, oldsemester, oldteacher, ) {
        console.log("este es el teacher ",teacher)
        if (name==null){
          name=oldname;
        }
        if (semester==undefined){
          semester=oldsemester;
        }
        if (teacher==undefined){
          teacher=oldteacher;
        }

        dispatch(
          actions.startUpdatingCourse({
            id, name, teacher, semester
          }),
        toast('¡Curso actualizado!', 
          {position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000}),
        dispatch(reset('courseupdateform')),
        );
      },
    }),
    (stateProps, dispatchProps, ownProps) => ({
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onSubmit({name}) {
        dispatchProps.onSubmit({name}, stateProps.teacher,stateProps.semester, stateProps.id, stateProps.oldname, stateProps.oldsemester, stateProps.oldteacher );
      },
    })
  )(CourseUpdateForm)
);

