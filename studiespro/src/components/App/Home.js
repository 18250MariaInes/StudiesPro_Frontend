import React, {useState, useEffect} from 'react';
import AddTeacherForm from '../AddTeacherForm';
import Teachers from '../Teachers';
import AddTeacherButton from '../AddTeacherButton';
import LoginForm from '../LoginForm';
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
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';

function Home(isAuthenticated= false){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    if (!isAuthenticated) {
        return (
          <Redirect to='/' />
        );
    }
      
    return (
        <div >
          <h1 className="home-title-home">Studies Pro</h1>            
        </div>
    )
}
export default connect(
    state => ({
      isAuthenticated: selectors.isAuthenticated(state),
    }),
    dispatch => ({
     
    }),
  )(Home);