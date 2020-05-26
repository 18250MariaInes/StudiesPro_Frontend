import React, {useState, useEffect} from 'react';
import AddTeacherForm from '../AddTeacherForm';
import Teachers from '../Teachers';
import AddTeacherButton from '../AddTeacherButton';
import TokenRefresh from '../TokenRefresh';

function AddTeacherView(){
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
            <AddTeacherForm/>
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default AddTeacherView;