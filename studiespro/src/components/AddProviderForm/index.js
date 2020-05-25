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
import * as actions from '../../actions/providers';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedProvider';
import './styles.css';
const ProviderForm = ({
  onSubmit,
  isLoading,
  student,
  selectedP,
}) => {
  const [name, changeName] = useState('');
  const [address, changeAddress] = useState('');
  const [email, changeEmail] = useState('');
  return (
    <div className="formP">
      {/*<LogoutButton/>*/}
      <h2 className="tituloformp">{'Crear un nuevo provider:'}</h2>
      <p>
        <input className="inputProv"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <input className="inputProv"
          type="text"
          placeholder="Direccion"
          value={address}
          onChange={e => changeAddress(e.target.value)}
        />
      </p>
      <p>
        <input className="inputProv"
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
            <Link to='/Providers'> 
              <button type="submit" className="buttonTformp" onClick={
                () => {
                  onSubmit(name, address, email,student, selectedP);
                  console.log(selectedP);
                  //changeName('');
                  //changeaddress('');
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
    selectedP: selectedActions.selectedProvider(state).payload.selectedProvider.id,
  }),
  dispatch => ({
    onSubmit(name,address,email, student,selectedP) {
      //console.log(student);
      console.log(selectedP);
      dispatch(
        actions.startAddingProvider({
          id: uuidv4(),
          name,
          address,
          email,
          student,
        }),
      );
      //console.log(student);
    },
  }),
)(ProviderForm);
