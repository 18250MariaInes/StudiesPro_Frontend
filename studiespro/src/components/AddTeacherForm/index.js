import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/teachers';


const TeacherForm = ({
  onSubmit,
  isLoading,
  student,
}) => {
  const [name, changeName] = useState('');
  const [lastname, changeLastName] = useState('');
  const [email, changeEmail] = useState('');
  return (
    <div>
      <h2>{'Crear un nuevo catedratico:'}</h2>
      <p>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Apellido"
          value={lastname}
          onChange={e => changeLastName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => changeEmail(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <button type="submit" onClick={
              () => {
                onSubmit(name, lastname, email,student);
                console.log(student);
                //changeName('');
                //changeLastName('');
                //changeEmail('');
              }
            }>
              {'Agregar'}
            </button>
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
    onSubmit(name,lastname,email, student) {
      console.log(student);
      dispatch(
        actions.startAddingTeacher({
          id: uuidv4(),
          name,
          lastname,
          email,
          student,
        }),
      );
      console.log(student);
    },
  }),
)(TeacherForm);
