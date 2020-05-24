import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/providers';
import * as selectedActions from '../../actions/selectedProvider';

const Provider = ({ 
  provider,
  name, 
  /*onDelete,*/ 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
}) => (
  /*<div
  className={
    `
      Teacher-wrapper
      ${isSelected ? 'Teacher--selected' : ''}
    `
  }
  onClick={onClick}
  >
  <tr className={!isConfirmed ? 'pet-owner-row--pending' : ''}>
    <td>{ name }</td>
  </tr>
  </div>*/
  <div
        className={
          `
            provider-wrapper
            ${isSelected ? 'provider--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="provider">
          <button className="delete_provider"
            onClick={onDelete}>
             &times;
          </button>
          <div className="provider_name">
              Nombre: {(Object.entries(Object.entries(provider)[1])[1]).slice(1)}
              <br></br>
              Apellido: {(Object.entries(Object.entries(provider)[2])[1]).slice(1)}
              <br></br>
              Correo: {(Object.entries(Object.entries(provider)[3])[1]).slice(1)}
          </div>
        </div>
     </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getProvider(state, id),
    provider: id/*index*/,
    isSelected: selectors.getSelectedProvider(state) === id/*index*/,
    /*isSelected: selectors.getSelectedTeacher(state) === index,*/
  }),
  (dispatch, {id}) => ({
    onClick() {
      dispatch(selectedActions.selectedProvider(id));
      console.log(selectedActions.selectedProvider(id));
    },
    
    onDelete() {
      dispatch(actions.startRemovingProvider(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Provider);