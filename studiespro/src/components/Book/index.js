import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/books';
import * as selectedActions from '../../actions/selectedBook';

const Book = ({ 
  book,
  name, 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
  isNear = false,
}) => (

  <div
    className={
      `
      book-wrapper
        ${isNear ? 'book--selected' : ''}
        ${isSelected ? 'book--clicked' : ''}
      `
      
    }
    onClick={onClick}
  >    
  
  <div className="book">
        
        
          <button className="delete_book"
          onClick={onDelete}>
              &times;
          </button>
        
        <div className="book_name">
        <p className="subtitulob">Título:</p>
        <p className="contenidob">
            {(Object.entries(Object.entries(book)[1])[1]).slice(1)}
            </p>
        <p className="subtitulob">Descripción:</p>
        <p className="contenidob">
            {(Object.entries(Object.entries(book)[2])[1]).slice(1)}
            </p>
        <p className="subtitulob">Fecha:</p>
        <p className="contenidob">
           {(Object.entries(Object.entries(book)[3])[1]).slice(1)}
           </p>
        </div>
    </div>
  </div>
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getBook(state, id),
    book: id,
    isNear: id.is_near,
    isSelected: selectors.getSelectedBook(state) === id

  }),
  (dispatch, {id, state, teachers}) => ({
    onClick(teachers) {
      dispatch(selectedActions.selectedBook(id));
      console.log(selectedActions.selectedBook(id));
      //console.log(teachers)
    },
      
    onDelete() {
      dispatch(actions.startRemovingBook(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Book);