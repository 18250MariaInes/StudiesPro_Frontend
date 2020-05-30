import React, {useState, useEffect} from 'react';
import AddTeacherForm from '../AddTeacherForm';
import Teachers from '../Teachers';
import AddTeacherButton from '../AddTeacherButton';
import UpdateTeacherButton from '../UpdateTeacherButton';

function TeachersView(){

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
            {/*<AddTeacherForm/>*/}
            <AddTeacherButton/>
            <UpdateTeacherButton/>
            <Teachers/>
        </div>
    )
}
export default TeachersView;