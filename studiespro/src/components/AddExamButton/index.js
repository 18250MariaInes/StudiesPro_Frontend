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


const addexam = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-exam'>
            <button className='addexam-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADUUlEQVRoge2YTWgUZxiAn/ebjdmluAoSCMlaRDyIeBEL/mCEgtRoe7E4XgSrB7170Sii48XEFnq29FIoQmUNFIptc0hFK+akLWJIFRWNcTFK2/gXs3/zesgqKWTHyczXZJR9YJllvvd7v/fZd2e+nRUCyLk9GjQ+U0byXQLQ6p5oeZg//NhmbmMzWVhSmItL3C9bbeacExFgeQX/vE2ZuRIByzJzKQIWZeZaBCzJJEEELMgkRQRiyiRJBGLIJE0EIsokUQQiyCRVBGYok2QRmIFM0kUgpExqtqqZyutfwTZ5FzoSisBPxvbzSFyCOvnedKQhUocHCqOWc4bC5l3rue9U1pmq0wxyg1nutrXFFL4v/HDk/kj+0C2QX23lDYu1jqiv3+bcrzMjj5+WfdFTRtlqK3cYbHXkZqH30B9K+dP2lvTmwoqJc6D3LOUOhRUREe0FMKquEfkCz/MRvrORO3QNQYNhN0SDflSZKA6ZdPoR0KQVv00NLcaYIStV1vi/N8Th4XzXVdOc6QQ+AObhmO2F3sN/AYOBM0WPg35uoYb4IqLyM4iq0c/enBO2AaCSD5zrc3kBxXNxawAbHTH04XlGlC1Tzn681O1ZYFTPBk1Vw/zBvFcCXsYvIx7l5qaXvy0eal4NTH1emFcW3Trc2zUIDNebLMr82tu/gX+AO0AxSiFx95GBW6e9p+3bT2YFTmL8fxWeGF/GBL0GgNKHsLcW/wzRPUa5q8YZm/DHRwFG8l2LXyfMud2dIL/MqogKfQAPzh7sB/qnDTLah8obEUdTVytVv+xQyaadTBZ43raje5Ng2vE1DUS6+GOJGN/8vmynl50oZc6AZkGyk0eywELFrEqVmvorTUWfya9xW5XqHXHAx0CVr4ADonJM0A3Bm8FbaonhUa4Wx6+USpk1oJ3AetCVwIfAQgBRv+Puj/vHQK9Pl0BEswACz2LUAcQT+bPwkzeuwtp6AWKkA0CFS9MGKG0x1v8P0UVUByYPuq5+iHYACDIw7Thsybk9F4BPItdRI7qIMbeX7PbSQF0RoDXndu9DdU2d8RSwEXAi1zElUTRUj1ZepHdRux7qI99EXmMGxLlrLaq9EkHjz4ek0RBJGg2RpNEQSRoNkaTx3oi8AmcWKhFmuXZkAAAAAElFTkSuQmCC"></img>
              
            
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
)(addexam);