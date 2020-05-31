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


const updatecourse = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-course'>{/*cambiar ruta */}
            <button className='updatecourse-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRoge2YO07DQBQAZ3OB9HTIV6DgCNTEDTINR6CCBsWRKMgpaLBonNQ5AgVXsKg4ABVdlgZDYmyvP+t9G+Epn73SjOw8WYGRkf+NkhbYJZll18CdgncFVxer4NV0xpuAJMxiNPOd0YfWk7PL9fFL3TkvAkrkc4wR4gE18jm1EZOBvNrwabg+VWq7eTp/Oy27KB4QpcESxcJw21Sp7eZ5lp0UL4gHAERpEDeJ0PBYHDoPSMIsTsIsLs6bRGg4Ks6cBvz8YDXzjhH3xYGzLVSxbZbRKrgtufcGzcPeUBNH6+BPnJMAw6o0R1TIg4OABnseFIsoDeLSs3y/WpVHB6SR/C+lT8LEYAEt5XNaRwwS0FE+p1WE9TXaUx608dNiD6tPwIJ85bapwlqAhDxYCpCSBwsBkvLQM0BaHnoE+CAPHQN8kYcOAT7JQ8sA3+ShRYCP8tAwwFd5aBDgszwYAnyXh5qAQ5CHus/pA5CHIf5WcSgPtgMcy4PNAAF5sBUgJA82AgTloW+AsDz0CfBAfmRkZESeL9Q0+tGrRBmZAAAAAElFTkSuQmCC"></img>

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
)(updatecourse);