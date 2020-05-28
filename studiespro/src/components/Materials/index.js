import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/materials';
import Material from '../Material';
import * as actionsp from '../../actions/providers';

const Materials = ({ material, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div>
    
      {
        material.length === 0 && !isLoading && (
          <p className="titulo">{'No hay materiales registrados'}</p>
        )
      }
      {
        material.length > 0 && !isLoading && (
          <p className="titulo">{'Materiales Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p className="titulo">{'Cargando...'}</p>
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
    provider: selectors.getProviders(state),
    material: selectors.getMaterials(state),
    isLoading: selectors.isFetchingMaterials(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actionsp.startFetchingProviders());
      setTimeout(() => { dispatch(actions.startFetchingMaterials()); }, 500);
      
    },
  }),
)(Materials);