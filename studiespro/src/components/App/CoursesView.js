import React, {useState, useEffect} from 'react';
//import AddSshipeventForm from '../AddSshipeventForm';
import Courses from '../Courses';
import AddCourseButton from '../AddCourseButton';
import UpdateCourseButton from '../UpdateCourseButton';
import TokenRefresh from '../TokenRefresh';

function CoursesView(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div>
            {/*<AddSshipeventForm/>*/}
            <AddCourseButton/>
            <UpdateCourseButton/>
            <Courses/>
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default CoursesView;