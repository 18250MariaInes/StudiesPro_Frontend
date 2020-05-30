/*import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/sshipevents';

const Sshipevent = ({ 
  sshipevent,
  name, 
  isConfirmed = false,
  isSelected = false,
  onDelete,
}) => (
  <div>
      <div className="sshipevent">
        <button className="delete_sshipevent"
          onClick={onDelete}>
          &times;
        </button>

        <div className="sshipevent_name">
          <p className="subtitulos">Nombre</p>
          <p className="contenidos">
            {(Object.entries(Object.entries(sshipevent)[1])[1]).slice(1)}
            </p>
          <p className="subtitulos">Descripción</p>
          <p className="contenidos">
            {(Object.entries(Object.entries(sshipevent)[2])[1]).slice(1)}
            </p>
              <p className="subtitulos">Cantidad de horas</p>
              <p className="contenidos">
              Horas: {(Object.entries(Object.entries(sshipevent)[3])[1]).slice(1)}
              </p>
        </div>
      </div>
    </div>
);

export default connect(
  (state, { id, }) => ({
    ...selectors.getSshipevent(state, id),
    sshipevent: id,
    //isSelected: selectors.getSelectedSshipevent(state) === id,
  }),
  (dispatch, {id}) => ({
    
    onDelete() {
      //dispatch(actions.startRemovingSshipevent(id));
      console.log(id);
      console.log("Hola soy evento");
    }
  }),
)(Sshipevent);*/
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/sshipevents';
import * as selectedActions from '../../actions/selectedSshipevent';

const Sshipevent = ({ 
  sshipevent,
  name, 
  isConfirmed = false,
  isSelected = false,
  onDelete,
  onClick,
}) => (
  <div
    className={
      `
      sshipevent-wrapper
        ${isSelected ? 'sshipevent--clicked' : ''}
      `
      
    }
    onClick={onClick}
  >   
        <div className="sshipevent">
          <button className="delete_sshipevent"
            onClick={onDelete}>
             &times;
          </button>
          
          <div className="sshipevent_name">
            <p className="subtitulos">Nombre</p>
            <p className="contenidos">
               {(Object.entries(Object.entries(sshipevent)[1])[1]).slice(1)}
               </p>
             <p className="subtitulos">Descripción</p>
             <p className="contenidos">
               {(Object.entries(Object.entries(sshipevent)[2])[1]).slice(1)}
               </p>
             <p className="subtitulos">Cantidad de horas</p>
             <p className="contenidos">
               {(Object.entries(Object.entries(sshipevent)[3])[1]).slice(1)}
               </p>
          </div>
        </div>
     </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getSshipevent(state, id),
    sshipevent: id/*index*/,
    //descomentar
    //isSelected: selectors.getSelectedSshipevent(state) === id
  }),
  (dispatch, {id}) => ({
    onClick() {
      dispatch(selectedActions.selectedSshipevent(id));
      console.log(selectedActions.selectedSshipevent(id));
      //console.log(teachers)
    },    
    onDelete() {
      dispatch(actions.startRemovingSshipevent(id));
      console.log(id);
      console.log("Hola soy Evento");
    }
  }),
)(Sshipevent);