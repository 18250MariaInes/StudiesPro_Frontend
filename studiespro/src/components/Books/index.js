import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/books';
import Book from '../Book';


const Books = ({ book, isLoading, onLoad }) => {
  useEffect(onLoad, []);
  return (
  <div >
    
      {
        book.length === 0 && !isLoading && (
          <p className="titulo">{'No hay catedráticos registrados'}</p>
        )
      }
      {
        book.length > 0 && !isLoading && (
          <p className="titulo">{'Libros Registrados'}</p>
        )
      }
      
      {
        isLoading && (
          <p className="titulo">{'Cargando...'}</p>
        )
      }
      {
        book.length > 0 && !isLoading && (
          <div className="books">
              {
                book.map(id => <Book key={id}
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
    book: selectors.getBooks(state),
    isLoading: selectors.isFetchingBooks(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingBooks());
    },
  }),
)(Books);