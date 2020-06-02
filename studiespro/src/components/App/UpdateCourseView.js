import React, {useState, useEffect} from 'react';
import AddDelvaForm from '../AddDelvaForm';
import Delvas from '../Delvas';
import AddDelvaButton from '../AddDelvaButton';
import TokenRefresh from '../TokenRefresh';
import UpdateCourseForm from '../UpdateCourseForm';
import Semesters from '../Semesters';
import Teachers from '../Teachers';

function UpdateCourseView(){
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
            <h1 className="instrucciones">Selecciona un semestre, un profesor e introduce el nombre del curso</h1>
            <div className="organizador_course" >
                <Semesters/>
                <Teachers/>
            </div>
            <UpdateCourseForm/>
            <TokenRefresh reviewTime={3600000} />          
            
        </div>
    )
}
export default UpdateCourseView;