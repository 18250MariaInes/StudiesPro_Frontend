import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/delvas';
import Delva from '../Delva';


const Delvas = ({ delva, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
    
  <div className="delvas">
    
      {
        delva.length === 0 && !isLoading && (
          <p>{'No hay delvas registradas'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        delva.length > 0 && !isLoading && (
          <div>
          <p>{'Charlas Delvas Registradas:'}
          </p>
              {
                delva.map(id => <Delva key={id}
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
    delva: selectors.getDelvas(state),
    isLoading: selectors.isFetchingDelvas(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingDelvas());
    },
  }),
)(Delvas);