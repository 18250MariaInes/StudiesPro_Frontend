import React, {useState, useEffect} from 'react';
import AddCourseForm from '../AddCourseForm';
import Semesters from '../Semesters';
import Teachers from '../Teachers';
import AddSshipeventButton from '../AddSshipeventButton';

function AddCourseView(){
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
            <h1 className="instrucciones">Selecciona un semestre, un catedratico e introduce el nombre del curso</h1>
            <div className="teach-semes-wrapper">
                <Semesters/>
                <Teachers/>
            </div>
            <AddCourseForm/>
           
            
        </div>
    )
}
export default AddCourseView;