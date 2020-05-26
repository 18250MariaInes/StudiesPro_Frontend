import React, {useState, useEffect} from 'react';
import AddAssignmentForm from '../AddAssignmentForm';
import Courses from '../Courses';
import AddProviderButton from '../AddProviderButton';

function AddAssignmentView(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div >
            <h1 className="instrucciones">Selecciona un curso e introduce la tarea</h1>

            <Courses/>
            <AddAssignmentForm/>
           
            
        </div>
    )
}
export default AddAssignmentView;