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


const adddelva = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-delva'>
            <button className='adddelva-button' onClick={onClick}>
            <img src="data:image/png;base64,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"></img>
          
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
      dispatch(<Redirect to='/Home' />);
    },
  })
)(adddelva);