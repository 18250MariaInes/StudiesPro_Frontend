import React, {useState, useEffect} from 'react';
import AddCourseForm from '../AddCourseForm';
import Semesters from '../Semesters';
import Teachers from '../Teachers';
import AddSshipeventButton from '../AddSshipeventButton';
import TokenRefresh from '../TokenRefresh';

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
        <div className="add-course-wrapper" >
            <h1 className="instrucciones">Selecciona un semestre, un catedratico e introduce el nombre del curso</h1>
            <div className="organizador_course" >
                <Semesters/>
                <Teachers/>
            </div>
            <AddCourseForm/>
            <TokenRefresh reviewTime={3600000} /> 
           
            
        </div>
    )
}
export default AddCourseView;