import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/providers';
import Provider from '../Provider';


const Providers = ({ provider, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    /*<Fragment>
      {
        teacher.length === 0 && !isLoading && (
          <p>{'No hay catedráticos registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        teacher.length > 0 && !isLoading && (
          <div>
          <p>{'CATEDRATICOS REGISTRADOS:'}
          </p>
              {
                teacher.map(index => <Teacher key={index}
                index={index}/>)
              }
          </div>
        )
      }
    </Fragment>*/
  <div className="providers">
    
      {
        provider.length === 0 && !isLoading && (
          <p>{'No hay providers registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        provider.length > 0 && !isLoading && (
          <div>
          <p>{'PROVIDERS REGISTRADOS:'}
          </p>
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