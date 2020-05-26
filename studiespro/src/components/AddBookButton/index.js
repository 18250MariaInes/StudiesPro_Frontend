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


const addbook = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-book'>
            <button className='addbook-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADQ0lEQVRoge2av28TZxjHP8/lbBPiiQyggsAWGYBEAjHwHxCGSvyS6EDHIjkJZAgRSSSW60TMrwE1TYrCPxAEioWy0EqdukRiqRRoqwYfMJAhGcGRfb6HIRG1HN85scvdGfkz2c+9r/T96P1x72sZ2kQLqdfgQc9wIuYkM4peBvoEugLI5cmgPVkzs+nXafrAzf045QXQ43WNQ8bwevCgZziBWV4AjgeYp2E8RWJOMkOLSICPCPB9YCn+B7xFVI8FmKNpvEWEZIA5msZvarUULScy12vFa9VbTmT1Q+GvmdT4uep65EQElhQZKbva11Vwkl0FJ1l2tQ+4DrwUJK3I/M/p8XtacTLxfGFPpyY0iOAVFBFGu/PL09/xuFyrwRyXOtZSPVdB7wIxFb0/lM+OQnREimrw7dDryd+qMuQAHbQnz1fWZ9Jjp1WNBSCmyIUh+9Z8NKaWMFotsclZYMt6GMjf/lXQGxvf3PtzvVY8dBGBpe788vRO+63YnVPAK0HSqx/Xz4Uu4iKzXmvCDwvLEZVZAFG5GLqI4fK80b5qymZfPeV7HwmCWGf5HXxe2Gdrtamx8eQG7cnzcdN5UywbAPtCH5EKtr1LCrqlbegjUijIQWCpeouF/0bC63pbdMxD4ALyPvQR6TCkv+HOjntm44Muhi4CXJnjUsdOO1lYJsIVABF5GgWRYxvHjp2xN7U+DBwBXsuetVwURAC9O5MeO13jQU7Q+eriVHqiH8gCqiIjmRcPS1E5awGUBL2xYndOWVhOrQYWlrk5ElkgBnp70M6OQ3QOjZW8FJVHaspzd1fcBjDWiykc9wzCD8BRQEHvDNjZCdnctqMoUgdZFnFHBvLZZ5XV0N8jO8XoXjuaefGwtKUeRphmqCUBLSjiRVskarRFokZbJGp8NSLbfLPLoig/SqK4mPnn3uqXjdQYdUUE/X3F3tXvdSKNCnWnluMyHHUJ8BcpAbjxj/8GlKUpfETkLUC8lDwZVJhm8BFxnwCo6Mwv31i7gwrUKJ4Xq9kDI3tKZuJPYD/wN8pNV8p/XLXvrAQXb/v4/jPjp4PjvR2GkQM9HFSgenj9WOe7a117m11yuxInVBgDWVT48GXitfn6+ATmLhBKH3MT3gAAAABJRU5ErkJggg=="></img>
                
            
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
)(addbook);