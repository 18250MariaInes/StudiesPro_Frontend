import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/books';

const Book = ({ 
  book,
  name, 
  isConfirmed = false,
  isSelected = false,
  onClick,
  onDelete,
}) => (
    <div className="book">
        <button className="delete_book"
        onClick={onDelete}>
            &times;
        </button>
        <div className="book_name">
            Título: {(Object.entries(Object.entries(book)[1])[1]).slice(1)}
            <br></br>
            Descripción: {(Object.entries(Object.entries(book)[2])[1]).slice(1)}
            <br></br>
            Fecha: {(Object.entries(Object.entries(book)[3])[1]).slice(1)}
        </div>
    </div>
     
);

export default connect(
  (state, { id, /*index*/}) => ({
    ...selectors.getBook(state, id),
    book: id
  }),
  (dispatch, {id}) => ({
      
    onDelete() {
      dispatch(actions.startRemovingBook(id));
      console.log(id);
      console.log("Hola");
    }
  }),
)(Book);