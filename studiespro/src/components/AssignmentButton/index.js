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


const AssignmentButton = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-book'>
            <button className='assignment-button' onClick={onClick}>
          
                <h1 >Tareas</h1>
            
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
)(AssignmentButton);