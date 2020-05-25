import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/delvas';


const Delva = ({ 
  delva,
  name, 
  isConfirmed = false,
  isSelected = false,
  onDelete,
}) => (
  <div>
        <div className="delva">
          <button className="delete_delva"
            onClick={onDelete}>
             &times;
          </button>
          
          <div className="delva_name">
            <p className="subtitulo">Título:</p>
            <p className="contenido">
               {(Object.entries(Object.entries(delva)[1])[1]).slice(1)}
               </p>
             <p className="subtitulo">Fecha:</p>
             <p className="contenido">
               {(Object.entries(Object.entries(delva)[2])[1]).slice(1)}
               </p>
          </div>
        </div>
     </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getDelva(state, id),
    delva: id/*index*/,
    
    /*isSelected: selectors.getSelecteddelva(state) === index,*/
  }),
  (dispatch, {id}) => ({
    
    onDelete() {
      //dispatch(actions.startRemovingDelva(id));
      console.log(id);
      console.log("Hola soy delva");
    }
  }),
)(Delva);