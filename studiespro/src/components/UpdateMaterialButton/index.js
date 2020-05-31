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

const updatematerial = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-material'>
            <button className='updatematerial-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRoge2YPU7DMBhAn3uB7pwDKT0CE62YCRJHYIIFNZUY6CmQWuZSmHqERuIaHICJrWZppDYYx0kcf0bkjf6R3lPST1Ghp+d/o6QFDhnnixuFugc+dujrt+TqvepONAGTfJkB04Olz4FWZ6vR5dZ2L4oAg3xBZYR4gEW+wBox6MSqBhq+Ko4Md0pvLrbPI9OmeMBrks6BWcWx4U7pzXm+OC1viAcArJM0wyFigHoqLwYPmOTLbP/eH+EWoU/KK0EDDn6w0yYRGh7Ka8GmkGnaKJi/JOld+ew4X94qeCwtZ+sk/REXJMA2Kh0jjPL7+93iMOcBZvvXx3QX015BpwGO8oWI8Uk43OuGOvIFTSI6CWgiX1A3wvsYbSMPTp8WR3h9Am3lsUyb3/AWICEPngKk5MFDgKQ8tAyQlocWATHIQ8OAWOShQUBM8lAzIDZ5qBEQozw4BsQqDw4BMctDRUDs8mAJ+AvyYP+cjl4euvlbJZg8+A8IKg9+A4LLg78AEXnwEyAmD+0DROWhXYC4fE9PT4883+ejyEkmiiGyAAAAAElFTkSuQmCC"></img>

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
)(updatematerial);