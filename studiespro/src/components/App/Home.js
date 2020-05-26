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
import SemestersButton from '../SemestersButton';
import CoursesButton from '../CourseButton';
import ExamButton from '../ExamButton';
import AssignmentButton from '../AssignmentButton';
import TokenRefresh from '../TokenRefresh';

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
        <div className="buttons-wrapper" >
          <SemestersButton/>
          <CoursesButton/>
          <ExamButton/> 
          <AssignmentButton/>      
          <TokenRefresh reviewTime={3600000} />   
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