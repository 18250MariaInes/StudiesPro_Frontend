import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/materials';

const Material = ({ 
  material,
  name, 
  /*onDelete,*/ 
  isConfirmed = false,
  onDelete,
  provider
}) => (
  
      <div className="material">
        <button className="delete_material"
          onClick={onDelete}>
            &times;
        </button>

        <div className="material_name">
            <p className="subtitulom">Nombre:</p>
            <p className="contenidom">
            {(Object.entries(Object.entries(material)[1])[1]).slice(1)}
            </p>
            <p className="subtitulom">Descripcion:</p>
            <p className="contenidom">
            {(Object.entries(Object.entries(material)[2])[1]).slice(1)}
            </p>
            <p className="subtitulom">Precio:</p>
            <p className="contenidom">
            Q{(Object.entries(Object.entries(material)[3])[1]).slice(1)}
            </p>
            <p className="subtitulom">Provider:</p>
            <p className="contenidom">
            {provider==null ? "No tiene Provider": (Object.entries(Object.entries(provider)[1])[1]).slice(1)}
            </p>
        </div>
      </div>
    
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getProvider(state, id.provider),
    ...selectors.getMaterial(state, id),
    //providers: selectors.getProviders(state)/*index*/,
    material: id/*index*/,
    provider: selectors.getProvider(state, id.provider),
  }),
  (dispatch, {id}) => ({
    
    onDelete() {
      dispatch(actions.startRemovingMaterial(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Material);