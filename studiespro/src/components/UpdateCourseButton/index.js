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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABoUlEQVRoge2XMW6DQBBF/3ABJ6bLLQIpcoRcI0dI49BExlIK7EvkGj5CCuNbpCRKqnRsihES2gC7wMKsFV45uzN+X9gjDCws/G9IWqBOkeRPBHoB1EdQ0uPVITqZerwJUCR5SqBtrfStSvUQHuL3rj4vAjTIVxhDiAfokK/oDBFM5GUNgX4MV1YU0LHY5PdNh+IB1lm0V1A7w7UVBXT82pzv9APxAAAQZnFqE6IM1JtenD1AkeRpkeSpXrcKQXSjl2YNUP1gCbQdEkIp9arXZttCLdtmv86iRL/7mZyfAWT1GoHS6+z2T7hZAhhWpTFEmzyfTYzFnoeC2oVZnDb1AvzVauudNICNfI3GJ2FisgA95St6h5gkwED5il4hnK/RkfI2rxbafYc4kG/dNu09jpCQ5z4HSMlz70gk5bl/BNLyPGMgPsjznAH4Is+zeuKTPM/rgW/yPNMSH+V5rgW+yvNsAz7L8/wOfJfnz2jhEuSBjtfpS5AHJvg/MKc84DjA3PKAwwAS8oCjAFLygIMAkvLAyADS8sCIAD7ILywsLMjzC46G0viaOFgKAAAAAElFTkSuQmCC"></img>

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