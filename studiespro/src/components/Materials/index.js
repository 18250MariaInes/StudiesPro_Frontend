import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/materials';
import Material from '../Material';


const Materials = ({ material, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        material.length === 0 && !isLoading && (
          <p>{'No hay materiales registradas'}</p>
        )
      }
      {
        material.length > 0 && !isLoading && (
          <p className="titulo">{'Materiales Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        material.length > 0 && !isLoading && (

          <div className="materials">
          
              {
                material.map(id => <Material key={id}
                id={id}/>)
              }
          </div>
        )
      }
    </div>
  );
};

export default connect(
  state => ({
    material: selectors.getMaterials(state),
    isLoading: selectors.isFetchingMaterials(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingMaterials());
    },
  }),
)(Materials);