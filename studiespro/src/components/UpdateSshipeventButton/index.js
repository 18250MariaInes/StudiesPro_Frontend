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


const updatesshipevent = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-sshipevent'>
            <button className='updatesshipevent-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVRoge2XMU7DMBSGf+cC3dlQrsDAEZhpLsBMg8QEC2oqMdCVwMwF0s49AgNXsJg4ABNbzPAUKTJJ7CSOnyvyjY79+n1qa7XAzMz/RnAL1HmVy1sFPCjgC8BVGu8+TGeCCchlkgmodW3pu4zUxc3p/r3rXBABDfIVxgj2gA75is6IaCIvawTwY9iyiEpxeP68PG96yB6wioutgtgYti2iUhxyuTzTH7AHAEAaF5lNBIA3fdF7QC6TLJdJpq/bRAjgRF/zGlB9YQXUekiEAB4b1vzQcttsV/HuXt/7IpM7QD3V1wRUdh3v/8R5CTBclcaINnl6NjEW9zwUxCaNi6zpLEAfrbazkwbYyNdofCdMTBbQU76id8QkAQPlK3pFOL9GR8pDQJl+Wmj7HeJAvvW2aT/jCA55OucALnk6OxJOeTo/Am55mjGQEORpzgBCkadZPQlJnub1IDR5mmlJiPI014JQ5Wm2gZDlaX4HocvTa7RwDPJAx8/pY5AHJvg/4FMecBzgWx5wGMAhDzgK4JIHHARwygMjA7jlgREBIcjPzMzM8PMLmiQAN9V3Pe0AAAAASUVORK5CYII="></img>
                
            
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
)(updatesshipevent);