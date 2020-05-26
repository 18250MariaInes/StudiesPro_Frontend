import React, {useState, useEffect} from 'react';
import AddExamForm from '../AddExamForm';
import Courses from '../Courses';
import AddSshipeventButton from '../AddSshipeventButton';

function AddExamView(){
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
            <h1 className="instrucciones">Selecciona un curso y crea el examen</h1>
            <Courses/>
            <AddExamForm/>
        </div>
    )
}
export default AddExamView;