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
          <p className="subtitulop">Nombre</p>
          <p className="contenidop">
              {(Object.entries(Object.entries(provider)[1])[1]).slice(1)}
              </p>
          <p className="subtitulop">Apellido</p>
          <p className="contenidop">
             {(Object.entries(Object.entries(provider)[2])[1]).slice(1)}
             </p>
             <p className="subtitulop">Email</p>
             <p className="contenidop">
              {(Object.entries(Object.entries(provider)[3])[1]).slice(1)}
              </p>
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
      console.log(selectedActions.selectedProvider(id).payload.id);
    },
    
    onDelete() {
      dispatch(actions.startRemovingProvider(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Provider);