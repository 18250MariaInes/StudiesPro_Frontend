import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';


const updateexam = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-exam'>
            <button className='updateexam-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2XsU3DQBRA37FAejrkFSgYgZpkAZRkACpoUByJgszgIBZIUmcEClawqBiAii5HgSwZx/ad7fP9i/Arv33Se7Lz5cDAwP9GSQvkGa/TO+AR+ERxu51G76YzwQRMkjTWikVu9KX12fVufvFWdy6IgBL5DGOEeECNfEZtxFlPXvYovg13jJQ67G+Sj6uyi+IBm1m0Upql4baRUof9+CW9LF4QDwDYzKPYJgLNa3HoPWCSpPEkSePi3DLivDjwGpD9YLVi0TLiqTjwtoUqts1qO4seju5dp/canvMzrYh30+gozkuAYVUaI6rkwUOAxZ5HaZabeRSXnYXfV6vybEe/Wmzkc5Q+CRO9BTSUz2gc0UtAS/mMRhHO12hHebT50+IPTp+AA/nKbVOFswAJeXAUICUPDgIk5aFjgLQ8dAgIQR5aBoQiDy0CQpKHhgGhyUODgBDlwTIgVHmwCAhZHgwBoctDTcApyEPN5/QpyEMP/wd8yoPjAN/y4DBAQh4cBUjJg4MASXnoGCAtDx0CQpAfGBgYkOcHQPD+/ump8xYAAAAASUVORK5CYII="></img>
                
            
            </button>
        </Link>
      )
    }
  </Fragment>
);


export default connect(
  state => ({
    //isHidden: !selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onClick() {
      dispatch(<Redirect to='/Home' />);//CAMBIAR RUTA
    },
  })
)(updateexam);