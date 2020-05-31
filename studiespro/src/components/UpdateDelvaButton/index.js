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


const updatedelva = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-delva'>{/*CAMBIAR RUTA CUANDO JUNTEMOS TODO */}
            <button className='updatedelva-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2XMW7CMBRA3+cC7D1HUZCAvXPhAj1Cp3apCFKHcopeAJjZYSBqr9EDdOpWd6ii0hAcJza2EXnjdyy9pyRWAi0tl42EFthn/La9B55QfKC4WybD96o90QRMsk2qRKZ7o0/1zc2qP9zp9kURUCKfUxkRPEAjn6ON6JzIqw5fFetd6bC+3W37ZYvBAxbJaC5KzSou60qH9TjbXhcXggcALJJRahKB8Foceg+YZJt0km3S4tww4qo48BqQv7BKZNooQng+HHmi9LQRmS97g8eSax+UyMv+TImkq97gIM5LgPaoNIg4Jg8eAgzOeUSp2SIZpWV74ffROrrX0k+LifyfSfmdqNxW28qQWvI5DSJOEtBIPqdmhPNj1EoeUNWfFv9weges5TWnzTGcBYSQB0cBoeTBQUBIebAMCC0PFgExyEPDgFjkoUFATPJQMyA2eagREKM8GAbEKg8GATHLQ0VA7PKgCTgHedB8Tp+DPJzgf8CnPDgO8C0PDgNCyIOjgFDy4CAgpDxYBoSWB4uAGORbWlpawvMDZfUCpqkQSnEAAAAASUVORK5CYII="></img>
                
            
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
)(updatedelva);