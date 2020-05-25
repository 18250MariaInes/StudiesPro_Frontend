import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/providers';
import Provider from '../Provider';


const Providers = ({ provider, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        provider.length === 0 && !isLoading && (
          <p>{'No hay providers registrados'}</p>
        )
      }
      {
        provider.length > 0 && !isLoading && (
          <p className="titulo">{'Proveedores Registrados'}</p>
        )
      }
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        provider.length > 0 && !isLoading && (
          <div className="providers">
              {
                provider.map(id => <Provider key={id}
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
    isLoading: selectors.isFetchingProviders(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingProviders());
    },
  }),
)(Providers);