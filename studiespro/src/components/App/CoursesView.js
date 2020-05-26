import React, {useState, useEffect} from 'react';
//import AddSshipeventForm from '../AddSshipeventForm';
import Courses from '../Courses';
import AddCourseButton from '../AddCourseButton';

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
            <Courses/>
        </div>
    )
}
export default CoursesView;