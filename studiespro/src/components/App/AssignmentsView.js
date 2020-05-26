import React, {useState, useEffect} from 'react';
//import AddProviderForm from '../AddProviderForm';
import Assignments from '../Assignments';
import Courses from '../Courses';
import AddAssignmentButton from '../AddAssignmentButton';

function AssignmentsView(){
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
            {/*<AddProviderForm/>*/}
            <AddAssignmentButton/>
            <Assignments/>

        </div>
    )
}
export default AssignmentsView;