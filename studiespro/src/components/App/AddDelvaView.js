import React, {useState, useEffect} from 'react';
import AddDelvaForm from '../AddDelvaForm';
import Delvas from '../Delvas';
import AddDelvaButton from '../AddDelvaButton';

function AddDelvaView(){
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
            <AddDelvaForm/>
           
            <h1 className="home-title">DELVAS</h1>
            
        </div>
    )
}
export default AddDelvaView;