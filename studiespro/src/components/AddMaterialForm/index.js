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
import * as actions from '../../actions/materials';
import LogoutButton from '../LogoutButton';
import * as selectedActions from '../../actions/selectedProvider';
import './styles.css';

const AddMaterialForm = ({
  onSubmit,
  isLoading,
  student,
  provider,
}) => {
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [price, changePrice] = useState('');
  return (
    <div className="formM">
      {/*<LogoutButton/>*/}
      <h2 className="tituloformm">{'Crear un nuevo material:'}</h2>
      <p>
        <input className="inputMat"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <input className="inputMat"
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => changeDescription(e.target.value)}
        />
      </p>
      <p>
        <input className="inputMat"
          type="text"
          placeholder="Price"
          value={price}
          onChange={e => changePrice(e.target.value)}
        />
      </p>
      <p>
        {
          isLoading ? (
            <strong>{'Cargando...'}</strong>
          ) : (
            <Link to='/Materials'> 
              <button type="submit" className="buttonTformp" onClick={
                () => {
                  onSubmit(name, description, price, student, provider);
                  console.log(student);
                  console.log(provider);
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
    provider: selectedActions.selectedProvider(state).payload.selectedProvider.id,
  }),
  dispatch => ({
    onSubmit(name, description, price, student, provider) {
      console.log(student);
      dispatch(
        actions.startAddingMaterial({
          id: uuidv4(),
          name,
          description, 
          price,
          student,
          provider,
        }),
      );
      //console.log(student);
    },
  }),
)(AddMaterialForm);
