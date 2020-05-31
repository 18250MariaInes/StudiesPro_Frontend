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


const updateprovider = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Update-provider'>{/*cambiar ruta cuando juntemos todo*/}
            <button className='updateprovider-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVRoge2YrU7DQACAvysKhQEEb8CPRCCWBYEgAR4Cx3A4soVQEmDbCzAcL8ESBAIySBBIGE+AGgYFqocgDVvprn/X3hH6ud1d2+9Lu0tTKCn53wjTAsMsdup7EnkAvDrC2X7aOXmMOsaagIVO3QV56P8W8O5JZ/1l9+RBdZwVAUF5nzgRxgPGyftERTi5mcVESO9DNS9hyhHe1fxZYyVs3njA826rDeJItcaPWDpvLAfnjAcA9GunbpwIT3oXwfHCAxY6dff7uR8lTgQwFxwoNODnDysP00QIxHFwbEKroYKQ3WZ1eqs6+XbZux5eN+j2bmY3Kp8IsTZ6Bun2a81W8LyFBCj2+Up4xN39aIR0+7VW6J3JPSDGPl+Z2ayKQbd3Mzw+6N7dz2xWBYjbfq2peKxyJEp+GClE+2XndD/pNXK7A0nkYfzjFEUuAUnlfdJEaN9G08r7RL1a/Fqf9kJhZJVX7Tbj0BZgQh40BZiSBw0BJuUhY4BpecgQYIM8pAywRR5SBNgkDwkDbJOHBAE2ykPMAFvlIUaAzfIQEWC7PCgC/oI8KF+n7ZeHXD6rFCcP2gOKlQetAcXLg7YAM/KgJcCcPGQOMCsPmQLMy5eUlJSY5wuSwRSJsXhudgAAAABJRU5ErkJggg=="></img>
                
            
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
)(updateprovider);