import React, {useState, useEffect} from 'react';
//import AddProviderForm from '../AddProviderForm';
import Assignments from '../Assignments';
import Courses from '../Courses';
import AddAssignmentButton from '../AddAssignmentButton';
import TokenRefresh from '../TokenRefresh';

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
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default AssignmentsView;