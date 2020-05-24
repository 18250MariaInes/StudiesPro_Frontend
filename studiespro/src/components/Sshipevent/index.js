import React from 'react';
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
  
    <div className="sshipevent">
      <button className="delete_sshipevent"
        onClick={onDelete}>
          &times;
      </button>
      <div className="sshipevent_name">
          Nombre: {(Object.entries(Object.entries(sshipevent)[1])[1]).slice(1)}
          <br></br>
          Descripcion: {(Object.entries(Object.entries(sshipevent)[2])[1]).slice(1)}
          <br></br>
          Horas: {(Object.entries(Object.entries(sshipevent)[3])[1]).slice(1)}
      </div>
    </div>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getSshipevent(state, id),
    sshipevent: id,
    //isSelected: selectors.getSelectedSshipevent(state) === id,
  }),
  (dispatch, {id}) => ({
    onDelete() {
      dispatch(actions.startRemovingSshipevent(id));
      console.log(id);
    }
  }),
)(Sshipevent);