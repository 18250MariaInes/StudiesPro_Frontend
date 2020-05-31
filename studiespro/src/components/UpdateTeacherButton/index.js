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


const updateteacher = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-teacher'> {/*cambiar ruta cuando juntemos todo*/}
            <button className='updateteacher-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABoklEQVRoge2XMU7DMBSGv9eNdmDnHAwcgb30AOxtJCZYUFOJga5tdw6QsnMEBq7BARhSNsxQRSpu4jiJE7si/xb7PeX7lOTJgT59/nfEN8BhdtvpHSKPovj8Qd2ObjYfZT3BCKRJFIuoeXYt8KWE6+F4/W7qC0JAh89iI+FdoAg+S5nEoD00uwjq27Sv4FwUb7vX2VXevneB4WS9VEoWpppMIt1OL/U97wIAo8kqtpEYIC/6eucCaRLFaRLF+rqlxIW+1qlA9sGKqHk9CfWkr3Q2hXKnjbAcjtcPeu0umd0jPP8pFRWfjTdHcp0IGEelhUQR/L695ZTNeQClZDGarOK8Xti/WkW9rQrYwB+Q5D6J8raWUgk+Sw2JVgRqwWepKOF8jDaCp/xocVzvMI3hDdOmsKfuzfT4gAdHAr7gwYGAT3hoKOAbHhoIhAAPNQVCgYcaAiHBQ0WB0OChgkCI8GApECo8WAiEDA8lAqHDg0HgFODBcJw+BXho4X+gS3hwLNA1PDgU8AEPjgR8wYMDAZ/w0FDANzw0EAgBvk+fPn385xe5bQW6XppgCwAAAABJRU5ErkJggg=="></img>
                
            
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
)(updateteacher);