import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/sshipevents';
import Sshipevent from '../Sshipevent';


const Sshipevents = ({ sshipevent, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        sshipevent.length === 0 && !isLoading && (
          <p className="titulo">{'No hay eventos de horas beca registrados'}</p>
        )
      }
      {
        sshipevent.length > 0 && !isLoading && (
          <p className="titulo">{'Eventos de horas beca registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p>{'Cargando...'}</p>
        )
      }
      {
        sshipevent.length > 0 && !isLoading && (
          <div className="sshipevents">
          
              {
                sshipevent.map(id => <Sshipevent key={id}
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
    sshipevent: selectors.getSshipevents(state),
    isLoading: selectors.isFetchingSshipevents(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingSshipevents());
    },
  }),
)(Sshipevents);