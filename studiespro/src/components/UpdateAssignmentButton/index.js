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


const updateassignment = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-assignment'>
            <button className='updateassignment-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABkUlEQVRoge2XPU6EQBhA3+wFtrczXMHCI1jvcAGPYKWNWTaxcE/hBYB6j2DhFchWHsDKbsfCkCALM/wMfLORV37MJO8FmAAsLPxvlLRAFV3kD2CegU8w91kUf7j2BBMQF1liYFsZfZkVd/m1frftCyKgQb7EGSEeYJEvsUasJvLqgfp2LFirE4fNMbttuigekEabvYKdY9lanTjoIr2pXxAPAEgjnXSJAPVWH84eEBdZEhdZUp93jLiqD2YNKF9YA9thEerlbOLV0ELLabPPIv10vjZ/NJjX6sxAkkf6LG6WAMdR6Yxok4cZAjqc8yjYpZFOmvbC76Nl2TsdXeQrNN4JF5MF9JQv6R0xScBA+ZJeEd6P0ZHyGHB9WvzB6x3wIN962rThLUBCHjwFSMmDhwBJeRgZIC0PIwJCkIeBAaHIw4CAkOShZ0Bo8tAjIER56BgQqjx0CAhZHhwBocuDJeAS5MHyOX0J8jDB/8Cc8uA5YG558BggIQ+eAqTkwUOApDyMDJCWhxEBIcgvLCwsyPMDXlT5qURr6lcAAAAASUVORK5CYII="></img>
                
            
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
)(updateassignment);