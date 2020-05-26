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


const addsshipevent = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-sshipevent'>
            <button className='addsshipevent-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADyElEQVRoge2YTWgcZRjHf8/sB/kwaEPiTGoQolAoPfWgNw8WvBjNV1kJ2oOIxIOQbFMPgXqI0N6a7UZIehAEwVNCcFPREjx69BAv3opeJNltxQjtms1sMo+H3ZTd2dl23qY6Wbs/WJb3/8zzzP9Z5n133lcIQWqFmLttfyUqKSCpULJEvv5mensKQcPUaMb8PNbPJ5wvVHlXoANwQVcSJwvvr77DwaPyrTA32duyh0XlPQUP2AFQ1Q/HPrfPHcU8wOaz9jmUD6rDnco95IL7u/1mmPxQDVhiOQCILuTS+V4LvQGAWgOP4bkOqda20Bu5dL4X0QUAiYWrHa8dpJb6Hc+1uvwX7avXJ0hDskL/+ev2S4/l/LA29DdWBlWvL6h2WbR4M32ncDh+0MBY1r5eLks6wGeQVNU1cyCSMbddV6OJLlcPhKt+3UIYW3QyuZn8pcoYSGUGO0Gmj2LkP0WZqXiuNlDyvG5CzodjQqzq2cy0qJwezzopT+TUk3bkiZwazzopUTltkhd/9CV1TChMyJFW/mBEGVYYNs1rpccmkHYDURMH6LCsoos3F7UZEzosqxi1hyeCAKSW+p8pu9ZC1GZMSCS9S6sf370fByjtJjpicW8qalMmlHYTl4H7LT+J2w1EzVPXwHJM9eXaD7ABoOhkQGwX2PXrik5W620E5CybGDJ6mVPRnbV04ddabSzrVP5QPGtrbXbbH1OAtYv1OaOZgRewFKDYEFu0d0SbbaEaeeoeoWOH0SMkSOfw8osn6kTXTQIQ056AmAA06GW3p7oVTvpjUnY7TTyZbWiU2YTrzgaFRPku4bqBaQnX/bNJxbceEguF4Y5M/wLx39AGuoEtoOSLDdH8UAOgCBTqJe0FeS6sI8NViKX1mfyntdpY1lkDJtSTyfXZ7R99sSLQcM5Uw0YunT9fK4wu2ldEuRzWU8tP4nYDUWO2jFbPhWo1FQZRsCx9fTzrOHUxiD28IIMN9ZR//1yoTtEHX58Z1gLlVYUV47waTBvYRPWnOkXkDWBI4Kaq5n2xyrm/6pf1sjgKI8BvqP7gy3kFOBvWkOnL3Pfr6ULQMjrkeXJtfTbvX0YvAOQuFj6q1UczA6+JpSPAZkNs0b4iKqEbaPlJ3G4gagTg7Wsn+2Jx726I64/NJD7Yt/q//WTrD9NV6CwSPMEURpAm720iU75rDxnyx0xp+Ueo3UDU/D8a2E923QPKEXsxwa16rjRwa/r2nqjMAcGb2uOFq8jcrenbe+Dbr6bmzyT/fv5edzS+wtF1p6e4Ov9LK/zQ4fgHKb9vPb2UR8QAAAAASUVORK5CYII="></img>
          
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
)(addsshipevent);